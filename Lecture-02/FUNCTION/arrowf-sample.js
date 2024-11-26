//Arrow function with two arguments 
const sum = (firsatParam, secondParam) => {
	return firsatParam + secondParam;
};
console.log(sum(2, 5)); // Print: 7

//Arrow function with no arguments
const printHello = () => {
	console.log("hello");
};
printHello(); //  Print: hello

//Arrow functions with a single argument
const checkWeight = (weight) => {
	console.log(`Baggage weight : ${weight} kilogram.`);
};
checkWeight(25); // Print: Baggage weight : 25 kilograms.

//Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60 
