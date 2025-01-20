function test001(a, b) {
    // ตรวจสอบว่าค่าที่ส่งเข้ามาเป็นตัวเลข
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both arguments must be numbers");
    }

    // รวมตัวเลขทั้งสองตัว
    return a + b;
}

console.log(test001(1, 2)); // แสดงผล: 3
console.log(test001(10, 5)); // แสดงผล: 15
//console.log(test001("Hello", 5)); // Error: Both arguments must be numbers
