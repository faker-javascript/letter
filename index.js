export default function fakeLetter(options) {
    options = options || {};
    let keyspace = {
        "en_US": "abcdefghijklmnopqrstuvwxyz",
        "ru_RU": "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    };
    let locale = ((options.locale === undefined) ? 'en_US' : options.locale);
    let letter = keyspace[locale].charAt(Math.floor(Math.random() * keyspace[locale].length));
    return (options.casing === 'upper' ? letter.toUpperCase() : letter);
};