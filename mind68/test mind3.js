function capToFront (text){
    let str = text;
    let upperCaseChars = ""; // สำหรับเก็บตัวอักษรพิมพ์ใหญ่
    let lowerCaseChars = ""; // สำหรับเก็บตัวอักษรพิมพ์เล็ก
    let iterator = str[Symbol.iterator]();
    while (true) {
        let result = iterator.next();
        if (result.done) break;
        // แยกตัวอักษรพิมพ์ใหญ่และพิมพ์เล็ก
        if (result.value >= 'A' && result.value <= 'Z') {
            upperCaseChars += result.value;
        } else {
            lowerCaseChars += result.value;
        }
    }

    // รวมตัวอักษรพิมพ์ใหญ่อยู่ด้านหน้า ตามด้วยพิมพ์เล็ก
    process.stdout.write(upperCaseChars + lowerCaseChars + "\n");
};

// เรียกใช้งานฟังก์ชันพร้อมส่งค่าพารามิเตอร์
capToFront("้hApPy");
capToFront("moveMENT");
capToFront("shOrtCAKE");