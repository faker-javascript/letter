import test from 'ava';
import letter from './index.js';

test('letter return type to be string', t => {
    t.is(typeof letter(), 'string');
});

test('letter length casing eq 1', t => {
    t.is(letter().length, 1);
    t.is(letter({casing: 'upper'}).length, 1);
    t.is(letter({casing: 'lower'}).length, 1);
});

test('letter with locale ru_RU includes', t => {
    t.true('абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.includes(letter({locale: 'ru_RU'})));
    t.false('абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.includes('z'));
});

test('letter with locale en_US includes', t => {
    t.true('abcdefghijklmnopqrstuvwxyz'.includes(letter({locale: 'en_US'})));
    t.false('abcdefghijklmnopqrstuvwxyz'.includes('я'));
});

test('letter with casing and locale ru_RU length eq 1', t => {
    t.is(letter().length, 1);
    t.is(letter({casing: 'upper', locale: 'ru_RU'}).length, 1);
    t.is(letter({casing: 'lower', locale: 'ru_RU'}).length, 1);
});
