const str = 'The quick brown fox jumps over the lazy dog.'

const word = str.split(' ');
console.log(word[3]);
//expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
//expected output: "k"