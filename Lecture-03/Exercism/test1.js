function countString(input, type) {
    let matches;
    if (typeof input !== "string" || typeof type !== "string") {
        throw new Error("Invalid input: Both input and type must be strings.");
    }

    switch (type){
        case "w":
            if (input.length > 0) {
                matches = input.split(/\s+/).filter(word => word.length > 0).length;
            } else {
                return 0;
            }
             matches = input.split(/\s+/).filter(word => word.length > 0).length;
            break;
        case "c":
             matches = input.replace(/\s+/g,"").length;
            break;
        case "v":
             
             if (input.length > 0) {
                matches = input.match(/[aeiou]/gi);
                matches = matches.length 
            } else {
                return 0;
            }
            
            break;
        default: throw new Error("Invalid parameter: Type must be 'w', 'c', or 'v'.");
            break;
        
    }
   return matches;
}


// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8


module.exports = countString;
