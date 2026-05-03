import {
  type Api,
  type HttpMethod,
  ApiResponse,
  ApiError,
} from "@hyperledger/identus-domain";

/**
 * Default ceiling for how many bytes of an HTTP response body {@link FetchApi} will buffer
 * before JSON parsing. Oversized responses trigger {@link ApiError} with status 413.
 *
 * Pass `maxResponseBodyBytes: 0` to {@link FetchApi | the constructor} for no limit.
 */
export const FETCH_API_DEFAULT_MAX_RESPONSE_BODY_BYTES = 10 * 1024 * 1024;

export type FetchApiOptions = {
  /**
   * Maximum number of bytes read from a response body. Responses larger than this raise
   * {@link ApiError} (HTTP status 413).
   * Use `0` to disable the limit.
   */
  maxResponseBodyBytes?: number;
};

/**
 * Implement API using built in fetch
 */
export class FetchApi implements Api {
  private readonly maxResponseBodyBytes: number;

  constructor(options?: FetchApiOptions) {
    const configured = options?.maxResponseBodyBytes;
    this.maxResponseBodyBytes =
      configured !== undefined
        ? configured
        : FETCH_API_DEFAULT_MAX_RESPONSE_BODY_BYTES;
  }

  async request<T>(
    method: HttpMethod,
    urlStr: string,
    urlParameters: Map<string, string> = new Map(),
    httpHeaders: Map<string, string> = new Map(),
    body?: string | Record<string, any>
  ): Promise<ApiResponse<T>> {
    const url = new URL(urlStr);
    const headers = new Headers();

    for (const [name, value] of urlParameters) {
      url.searchParams.append(name, value);
    }

    for (const [name, value] of httpHeaders) {
      headers.append(name, value);
    }

    const opts: RequestInit = {
      method,
      headers,
    };

    if (this.includeBody(method)) {
      opts.body = typeof body === "string" ? body : JSON.stringify(body);
    }

    const response = await fetch(url, opts);
    const data = await this.parseResponse(response);

    if (response.ok) {
      return new ApiResponse<T>(
        data,
        response.status,
        response.statusText,
        response.headers
      );
    }

    throw new ApiError(response.status, response.statusText, data);
  }

  /**
   * should `body` be included in the request
   *
   * @param method
   * @returns {boolean}
   */
  private includeBody(method: HttpMethod): boolean {
    return method === "GET" ? false : true;
  }

  /**
   * attempt to convert response to JSON
   * or return as string
   *
   * @param response
   * @returns {string | {}}
   */
  private async parseResponse(response: Response) {
    const data = await this.readResponseBodyText(response);

    try {
      return JSON.parse(data);
    }
    catch {
      return data;
    }
  }

  /** Read full UTF-8 body text, enforcing {@link FetchApi.maxResponseBodyBytes} when enabled. */
  private async readResponseBodyText(response: Response): Promise<string> {
    const limit = this.maxResponseBodyBytes;

    if (limit <= 0) {
      return response.text();
    }

    if (!response.body) {
      const text = await response.text();
      this.assertBodyWithinLimit(Buffer.byteLength(text, "utf8"), limit);
      return text;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let totalBytes = 0;
    let result = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        if (value) {
          totalBytes += value.byteLength;
          if (totalBytes > limit) {
            await reader.cancel();
            throw new ApiError(413, "Payload Too Large", {
              message: `Response body exceeds maximum of ${limit} bytes`,
            });
          }
          result += decoder.decode(value, { stream: true });
        }
      }
    }
    catch (err) {
      if (err instanceof ApiError) {
        throw err;
      }
      await reader.cancel().catch(() => undefined);
      throw err;
    }

    result += decoder.decode();

    return result;
  }

  private assertBodyWithinLimit(bodyByteLength: number, limit: number): void {
    if (bodyByteLength > limit) {
      throw new ApiError(413, "Payload Too Large", {
        message: `Response body exceeds maximum of ${limit} bytes`,
      });
    }
  }
}
