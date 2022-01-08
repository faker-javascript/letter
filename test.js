import fakeLetter from './index.js';
import test from 'ava';

test('fakeLetter return type to be string', t => {
	t.is(typeof fakeLetter(), 'string');
});

test('fakeLetter length casing eq 1', t => {
	t.is(fakeLetter().length, 1);
	t.is(fakeLetter({ casing: 'upper' }).length, 1);
	t.is(fakeLetter({ casing: 'lower' }).length, 1);
});

test('fakeLetter with casing and locale ru_RU length eq 1', t => {
	t.is(fakeLetter().length, 1);
	t.is(fakeLetter({ casing: 'upper', locale: 'ru_RU' }).length, 1);
	t.is(fakeLetter({ casing: 'lower', locale: 'ru_RU' }).length, 1);
});