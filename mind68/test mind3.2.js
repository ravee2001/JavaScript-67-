function capToFront(input) {
    if (Array.isArray(input)) {
        return input.map(capToFront);
    }

    let text = input.toString(); // แปลงเป็นข้อความในกรณีที่เป็นตัวเลข
    let upperCaseChars = "";    // เก็บตัวอักษรพิมพ์ใหญ่
    let lowerCaseChars = "";    // เก็บตัวอักษรพิมพ์เล็ก
    let numbers = "";           // เก็บตัวเลข
    let symbols = "";           // เก็บเครื่องหมาย

    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            upperCaseChars += char;
        } else if (char >= 'a' && char <= 'z') {
            lowerCaseChars += char;
        } else if (/[0-9]/.test(char)) {
            numbers += char;
        } else {
            symbols += char;
        }
    }

    return `${upperCaseChars}${lowerCaseChars}, ตัวเลข: ${numbers.split('').join(',')}, เครื่องหมาย: ${symbols.split('').join(',')}`;
}

// ตัวอย่างการเรียกใช้งานที่ถูกต้อง:
console.log(capToFront(["hA2pPy", "23#"]));       // สำหรับอาร์เรย์
console.log(capToFront("move1MENT"));             // สำหรับข้อความ
console.log(capToFront("shOrt23CAKE"));           // สำหรับข้อความ
