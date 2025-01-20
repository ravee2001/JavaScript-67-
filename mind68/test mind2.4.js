function highestDigit(input) {
    if (Array.isArray(input)) {
        // ถ้าเป็นอาร์เรย์ซ้อนหลายระดับ
        return input.map(highestDigit);
    } else if (typeof input === "number" || typeof input === "string") {
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

console.log(highestDigit(379));
// Output: { highestDigit: 9, letters: "No letters found" }

console.log(highestDigit(2));
// Output: { highestDigit: 2, letters: "No letters found" }

console.log(
    highestDigit([
        [377, 401, "A"],
        [23, "Asd", 3.030],
        ["kL2", "9.3a"]
    ])
);
// Output:
// [
//   [
//     { highestDigit: 7, letters: "No letters found" },
//     { highestDigit: 4, letters: "No letters found" },
//     { highestDigit: "No digits found", letters: "A" }
//   ],
//   [
//     { highestDigit: 3, letters: "No letters found" },
//     { highestDigit: "No digits found", letters: "Asd" },
//     { highestDigit: 3, letters: "No letters found" }
//   ],
//   [
//     { highestDigit: 2, letters: "kL" },
//     { highestDigit: 9, letters: "a" }
//   ]
// ]
