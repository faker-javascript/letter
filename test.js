import fakeLetter from './index.js';
import test from 'ava';

test('fakeLetter return type to be string', t => {
	t.is(typeof fakeLetter(), 'string');
});

test('fakeLetter string length less eq 1', t => {
	t.is(fakeLetter().length, 1);
	t.is(fakeLetter({ casing: 'upper' }).length, 1);
	t.is(fakeLetter({ casing: 'lower' }).length, 1);
});
