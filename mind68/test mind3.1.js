function capToFront(text) {
    let upperCaseChars = ""; // เก็บตัวอักษรพิมพ์ใหญ่
    let lowerCaseChars = ""; // เก็บตัวอักษรพิมพ์เล็ก
    let nonDigits = "";      // เก็บตัวอักษรที่ไม่ใช่ตัวเลข
    let iterator = text[Symbol.iterator]();

    while (true) {
        let result = iterator.next();
        if (result.done) break;

        // แยกตัวอักษรพิมพ์ใหญ่และพิมพ์เล็ก
        if (result.value >= 'A' && result.value <= 'Z') {
            upperCaseChars += result.value;
        } else if (result.value >= 'a' && result.value <= 'z') {
            lowerCaseChars += result.value;
        }

        // ตรวจสอบว่าไม่ใช่ตัวเลข
        if (!/[0-9]/.test(result.value)) {
            nonDigits += result.value;
        }
    }

    // แสดงผลรวมตัวอักษรพิมพ์ใหญ่และพิมพ์เล็ก
    console.log("Result: " + upperCaseChars + lowerCaseChars);

    // แสดงตัวอักษรที่ไม่ใช่ตัวเลข
    console.log("Non-digits count: " + nonDigits.length);
    console.log("Non-digits: " + nonDigits);
}

// เรียกใช้งานฟังก์ชันพร้อมส่งค่าพารามิเตอร์
capToFront("้hA2pPy,23#");
capToFront("move1MENT");
capToFront("shOrt23CAKE");
