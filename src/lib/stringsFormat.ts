export type Catalog = Record<string, string>;

export function extractIncludes(source: string): string[] {
  return [...source.matchAll(/#include\s*<([^>]+)>/g)].map((match) => match[1]);
}

export function parseStrings(source: string): Catalog {
  const catalog: Catalog = {};
  const pair = /"((?:\\.|[^"\\])*)"\s*=\s*"((?:\\.|[^"\\])*)"\s*;/g;
  for (const match of source.matchAll(pair)) {
    catalog[unescape(match[1])] = unescape(match[2]);
  }
  return catalog;
}

function unescape(value: string): string {
  return value.replaceAll('\\"', '"').replaceAll('\\n', '\n').replaceAll('\\\\', '\\');
}

export function interpolate(template: string, args: Array<string | number>): string {
  return template.replace(/(?<!\\)\$(\d+)/g, (_, index: string) => {
    const value = args[Number(index) - 1];
    return value === undefined ? `$${index}` : String(value);
  });
}

export function pluralKey(base: string, count: number, locale: string): string {
  let rule = 'other';
  try {
    rule = new Intl.PluralRules(locale).select(count);
  } catch {
    rule = count === 1 ? 'one' : 'other';
  }
  return `${base}_${rule}`;
}
