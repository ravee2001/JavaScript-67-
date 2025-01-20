function highestDigit(input) {
    if (Array.isArray(input)) {
        // ถ้าเป็นอาร์เรย์ ให้จัดการทีละชุด
        return input.map(highestDigit);
    } else if (typeof input === "string" || typeof input === "number") {
        let str = input.toString();
        let digits = str.match(/\d/g); // ดึงเฉพาะตัวเลข
        let letters = str.match(/[a-zA-Z]/g); // ดึงเฉพาะตัวอักษร

        let highest = digits ? Math.max(...digits.map(Number)) : null;
        return {
            highestDigit: highest !== null ? highest : "No digits found",
            letters: letters ? letters.join("") : "No letters found"
        };
    } else {
        return { highestDigit: "Invalid input", letters: "Invalid input" };
    }
}

// ตัวอย่างการใช้งาน:
console.log(highestDigit(379));              // { highestDigit: 9, letters: "No letters found" }
console.log(highestDigit(2));                // { highestDigit: 2, letters: "No letters found" }
console.log(highestDigit(377401));           // { highestDigit: 7, letters: "No letters found" }
console.log(highestDigit("123abc456"));      // { highestDigit: 6, letters: "abc" }
console.log(highestDigit([379, "abc123", 45, "xyz"]));