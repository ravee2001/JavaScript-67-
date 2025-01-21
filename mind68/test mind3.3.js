function capToFront(input) {
    if (Array.isArray(input)) {
        // หาก input เป็นอาร์เรย์ จะเรียกใช้ฟังก์ชันนี้กับแต่ละสมาชิกของอาร์เรย์
        return input.map(capToFront);
    }

    let text = input.toString(); // แปลง input ให้เป็นข้อความในกรณีที่เป็นตัวเลข
    let upperCaseChars = [];    // อาร์เรย์เก็บตัวอักษรพิมพ์ใหญ่
    let lowerCaseChars = [];    // อาร์เรย์เก็บตัวอักษรพิมพ์เล็ก
    let numbers = [];           // อาร์เรย์เก็บตัวเลข
    let symbols = [];           // อาร์เรย์เก็บเครื่องหมายหรือสัญลักษณ์

    // วนลูปผ่านแต่ละตัวอักษรในข้อความ
    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            // ถ้าตัวอักษรอยู่ในช่วง A ถึง Z ให้เพิ่มเข้าใน upperCaseChars
            upperCaseChars.push(char);
        } else if (char >= 'a' && char <= 'z') {
            // ถ้าตัวอักษรอยู่ในช่วง a ถึง z ให้เพิ่มเข้าใน lowerCaseChars
            lowerCaseChars.push(char);
        } else if (/[0-9]/.test(char)) {
            // ถ้าตัวอักษรเป็นตัวเลข (0-9) ให้เพิ่มเข้าใน numbers
            numbers.push(char);
        } else {
            // ถ้าตัวอักษรเป็นสัญลักษณ์พิเศษ ให้เพิ่มเข้าใน symbols
            symbols.push(char);
        }
    }

    // สร้างและส่งคืนออบเจกต์ที่จัดกลุ่มตัวอักษร, ตัวเลข, และสัญลักษณ์แยกกัน
    return {
        upperCase: upperCaseChars,  // กลุ่มตัวอักษรพิมพ์ใหญ่
        lowerCase: lowerCaseChars, // กลุ่มตัวอักษรพิมพ์เล็ก
        numbers: numbers,          // กลุ่มตัวเลข
        symbols: symbols           // กลุ่มเครื่องหมายหรือสัญลักษณ์
    };
}

console.log(capToFront(["hA2pPy", "23#"]));       // สำหรับอาร์เรย์
console.log(capToFront("move1MENT"));             // สำหรับข้อความ
console.log(capToFront("shOrt23CAKE"));           // สำหรับข้อความ 