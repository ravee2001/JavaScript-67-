function highestDigit(inputArrays) {
    // ตรวจสอบว่าอินพุตเป็น array หลายมิติหรือไม่
    if (!Array.isArray(inputArrays)) {
        console.error("Error: Input must be an array of arrays.");
        return;
    }

    // ลูปผ่านแต่ละ array ย่อยใน input
    inputArrays.forEach((array, index) => {
        console.log(`Processing set ${index + 1}:`, array);

        // ตรวจสอบว่าเป็น array จริงหรือไม่
        if (!Array.isArray(array)) {
            console.error(`Error: Set ${index + 1} is not a valid array.`);
            return;
        }

        array.forEach((item) => {
            // แปลงค่าที่รับมาเป็นสตริง
            let strItem = item.toString();

            // แยกตัวเลขและตัวอักษร
            let digits = [];
            let nonDigits = [];
            for (let char of strItem) {
                if (/\d/.test(char)) {
                    digits.push(Number(char));
                } else {
                    nonDigits.push(char);
                }
            }

            // ตรวจสอบว่ามีตัวอักษรปนอยู่หรือไม่
            if (nonDigits.length > 0) {
                console.log(`Error: '${item}' contains non-numeric characters.`);
                console.log("Non-numeric characters:", nonDigits.join(""));
            } else {
                // คำนวณหาค่าที่มากที่สุดในตัวเลข
                console.log(`Highest digit in '${item}':`, Math.max(...digits));
            }
        });
        console.log(""); // เพิ่มบรรทัดว่างเพื่อความชัดเจน
    });
}

// ทดสอบฟังก์ชัน
highestDigit([
    [379, 2, "aC"],
    ["RTx", 234, 100.01],
    ["Rfx", 23, 10.023],
]);
