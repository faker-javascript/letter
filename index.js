export default function letter(options) {
    options = options || {};
    let keyspace = {
        "en_US": "abcdefghijklmnopqrstuvwxyz",
        "ru_RU": "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    };
    let locale = options.locale || 'en_US';
    let letter = keyspace[locale].charAt(Math.floor(Math.random() * keyspace[locale].length));
    return (options.casing === 'upper' ? letter.toUpperCase() : letter);
};