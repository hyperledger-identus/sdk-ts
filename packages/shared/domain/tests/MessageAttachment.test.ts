import { describe, expect, test } from "vitest";

import { AttachmentDescriptor, MercuryError } from "../src/index";

describe("AttachmentDescriptor.extractJSON", () => {
  test("throws UnknownAttachmentDataError for unsupported attachment shapes", () => {
    const headerOnly = new AttachmentDescriptor({ children: "x" });

    expect(() => AttachmentDescriptor.extractJSON(headerOnly)).toThrow(
      MercuryError.UnknownAttachmentDataError
    );
  });
});
