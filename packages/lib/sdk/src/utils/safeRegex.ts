const MAX_PATTERN_LENGTH = 256;

function hasNestedQuantifier(pattern: string): boolean {
  const stack: string[] = [];
  let i = 0;

  while (i < pattern.length) {
    if (pattern[i] === "\\") {
      i += 2;
      continue;
    }
    if (pattern[i] === "(") {
      stack.push("(");
      i++;
      continue;
    }
    if (pattern[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
        const next = i + 1;
        if (next < pattern.length && (pattern[next] === "+" || pattern[next] === "*" || pattern[next] === "?")) {
          return true;
        }
      }
      i++;
      continue;
    }
    if (pattern[i] === "[" || pattern[i] === "]" || pattern[i] === "{") {
      i++;
      continue;
    }
    i++;
  }
  return false;
}

function hasAlternationInGroup(pattern: string): boolean {
  let depth = 0;
  let groupStart = -1;

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "\\") {
      i++;
      continue;
    }
    if (pattern[i] === "(") {
      if (depth === 0) groupStart = i;
      depth++;
      continue;
    }
    if (pattern[i] === ")") {
      if (depth > 0) {
        const next = i + 1;
        if (depth === 1 && next < pattern.length && (pattern[next] === "+" || pattern[next] === "*" || pattern[next] === "?")) {
          const inner = pattern.slice(groupStart + 1, i);
          if (inner.includes("|")) {
            return true;
          }
        }
        depth--;
      }
      continue;
    }
  }
  return false;
}

export function isSafeRegex(pattern: string): boolean {
  if (typeof pattern !== "string" || pattern.length === 0) {
    return false;
  }

  if (pattern.length > MAX_PATTERN_LENGTH) {
    return false;
  }

  try {
    new RegExp(pattern);
  } catch {
    return false;
  }

  if (hasNestedQuantifier(pattern)) {
    return false;
  }

  if (hasAlternationInGroup(pattern)) {
    return false;
  }

  return true;
}
