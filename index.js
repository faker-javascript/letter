/* eslint camelcase: ["error", {properties: "never"}] */
export default function letter(options) {
    options = options || {};
    const keyspace = {
        en_US: 'abcdefghijklmnopqrstuvwxyz',
        ru_RU: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    };
    const locale = options.locale || 'en_US';
    const letter = keyspace[locale].charAt(Math.floor(Math.random() * keyspace[locale].length));
    return (options.casing === 'upper' ? letter.toUpperCase() : letter);
}
