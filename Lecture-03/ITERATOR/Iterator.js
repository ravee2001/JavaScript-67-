let str = "Hello";

// does the same as
// for (let char of str) console.loh(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // output characters one by one
}