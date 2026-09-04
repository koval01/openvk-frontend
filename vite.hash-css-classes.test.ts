import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildClassMap,
  collectClassNamesFromCss,
  hashClassName,
  rewriteCssSelectors,
  rewriteMarkup,
} from './vite.hash-css-classes.ts';

test('hashes are short, stable, and valid CSS identifiers', () => {
  const used = new Set<string>();
  const a = hashClassName('page_header', used);
  used.add(a);
  const b = hashClassName('page_header', new Set());
  assert.equal(a, b);
  assert.equal(a.length, 6);
  assert.match(a, /^[A-Za-z][A-Za-z0-9]{5}$/);
  assert.match(a, /[A-Z]/);
  assert.match(a, /\d/);
  const other = hashClassName('sidebar', used);
  used.add(other);
  assert.notEqual(a, other);
});

test('rewrites CSS and markup together', () => {
  const names = collectClassNamesFromCss('.page_header .sidebar, .page_header:hover {}');
  assert.deepEqual([...names].sort(), ['page_header', 'sidebar']);
  const map = buildClassMap(names);
  const header = map.get('page_header');
  const sidebar = map.get('sidebar');
  assert.ok(header);
  assert.ok(sidebar);
  const css = rewriteCssSelectors('.page_header .sidebar { color: red }', map);
  assert.equal(css.includes('.page_header'), false);
  assert.ok(css.includes(`.${header}`));
  assert.ok(css.includes(`.${sidebar}`));
  const html = rewriteMarkup(
    '<div class="page_header sidebar" class:sidebar={on} class={["page_header", on && "sidebar"]}></div>',
    map,
  );
  assert.equal(html.includes('page_header'), false);
  assert.ok(html.includes(`class="${header} ${sidebar}"`));
  assert.ok(html.includes(`class:${sidebar}=`));
  const tw = rewriteMarkup('<div class={["mb-2 flex", on && "page_header"]}></div>', map);
  assert.ok(tw.includes('"mb-2 flex"'));
  assert.ok(tw.includes(`"${header}"`));
  assert.equal(tw.includes('page_header'), false);
  const flash = rewriteMarkup(
    `<div class={['msg', kind === 'err' && 'msg_err']}></div>`,
    buildClassMap(['msg', 'msg_err']),
  );
  assert.equal(flash.includes('msg_err'), false);
  assert.equal(flash.includes("'msg'"), false);
});
