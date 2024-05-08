import { expect, test } from 'vitest';
import { Loro } from 'loro-crdt';

test('text insertions', () => {
  const doc = new Loro();
  const text = doc.getText('text');
  text.insert(0, '123');
  expect(text.toString()).toBe('123');
});
