export default function fakeLetter(options) {
    let keyspace = "abcdefghijklmnopqrstuvwxyz";
    let letter = keyspace.charAt(Math.floor(Math.random() * keyspace.length));
    options = options || {};
    return (options.casing === 'upper' ? letter.toUpperCase() : letter);
};