function highestDigit(input) {
    // แปลงค่าที่รับมาเป็นสตริง
    let strInput = input.toString();

    // ตรวจสอบว่ามีตัวอักษรที่ไม่ใช่ตัวเลขหรือไม่
    let digits = [];
    let nonDigits = [];
    for (let char of strInput) {
        if (/\d/.test(char)) { // ตรวจสอบว่าค่าคือเลข 0-9
            digits.push(Number(char));
        } else {
            nonDigits.push(char);
        }
    }

    // ถ้ามีตัวอักษรปนอยู่
    if (nonDigits.length > 0) {
        console.log("Error: Input contains non-numeric characters.");
        console.log("Non-numeric characters:", nonDigits.join(""));
        return;
    }

    // คำนวณค่าที่มากที่สุดในตัวเลข
    console.log("Highest digit:", Math.max(...digits));
}

// ทดสอบฟังก์ชัน
highestDigit(379);          // Output: Highest digit: 9
highestDigit(2);            // Output: Highest digit: 2
highestDigit(377401);       // Output: Highest digit: 7
highestDigit("123abc456");  // Output: Error: Input contains non-numeric characters. Non-numeric characters: abc
