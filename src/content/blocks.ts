export type Inline =
  | string
  | { href: string; text: string };

export type Block =
  | { type: 'p'; children: Inline[] }
  | { type: 'h'; children: Inline[] }
  | { type: 'ul'; items: Inline[][] }
  | { type: 'ol'; items: Array<Inline[] | { text: Inline[]; children: Inline[][] }> };

export type Article = {
  slug: string;
  heading: string;
  blocks: Block[];
};

export type FaqItem = {
  title: string;
  blocks: Block[];
};

export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  lead: string;
  blocks: Block[];
};

export type Localized<T> = { ru: T; en?: T };

export function pickLocalized<T>(value: Localized<T>, code: string): T {
  if (code.startsWith('en') && value.en) {
    return value.en;
  }
  return value.ru;
}

export function text(value: string): Inline[] {
  return [value];
}

export function p(value: string | Inline[]): Block {
  return { type: 'p', children: typeof value === 'string' ? text(value) : value };
}

export function h(value: string | Inline[]): Block {
  return { type: 'h', children: typeof value === 'string' ? text(value) : value };
}

export function ul(items: Array<string | Inline[]>): Block {
  return {
    type: 'ul',
    items: items.map((item) => (typeof item === 'string' ? text(item) : item)),
  };
}

export function ol(items: Array<string | Inline[] | { text: string | Inline[]; children: Array<string | Inline[]> }>): Block {
  return {
    type: 'ol',
    items: items.map((item) => {
      if (typeof item === 'string') {
        return text(item);
      }
      if (Array.isArray(item)) {
        return item;
      }
      return {
        text: typeof item.text === 'string' ? text(item.text) : item.text,
        children: item.children.map((child) => (typeof child === 'string' ? text(child) : child)),
      };
    }),
  };
}
