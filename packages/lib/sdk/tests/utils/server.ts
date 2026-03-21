import url from 'url';
import http from 'http';
import { ParsedUrlQuery } from 'querystring';

const log = (..._args: any[]) => { }

const makeServer = async () => {
  const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    req.setEncoding('utf8');

    const parsedUrl = url.parse(req.url!, true);
    let pathname = parsedUrl.pathname;

    log(`[${new Date().toISOString()}]`, req.method, pathname);

    if (pathname === '/') {
      pathname = '/json';
    }

    let status;
    let result;
    let data = '';

    req.on('data', (chunk) => { data += chunk });

    req.on('end', () => {
      function extractQueryParameters(query: ParsedUrlQuery) {
        const entries = Object.entries(query);
        return entries.reduce((acc, [key, value]) => {
          if (value === undefined) return acc;
          const flatten = (val: string | string[]): string => {
            if (Array.isArray(val)) {
              return val.reduce((a: string, c: string | string[]) => a ? `${a},${flatten(c)}` : flatten(c), '');
            }
            return String(val);
          };
          acc[key] = flatten(value);
          return acc;
        }, {} as Record<string, any>);
      }
      const query = extractQueryParameters(parsedUrl.query);
      status = query.status ?? 200

      if (pathname?.startsWith('/loopback')) {
        result = JSON.stringify({
          url: req.url,
          method: req.method,
          headers: req.headers,
          query: query,
          body: data,
        });

        res.writeHead(status, { 'Content-Type': 'application/json' });
      }
      else if (pathname?.startsWith('/json')) {
        result = data;
        res.writeHead(status, { 'Content-Type': 'application/json' });
      }
      else {
        result = ``;
        res.writeHead(status, { 'Content-Type': 'text/plain' });
      }

      res.end(result);
    });
  });

  const PORT = 3333;

  server.listen(PORT);
  server.on('error', () => server.close());

  return () => server.close();
};


export { makeServer };
