function highestDigit(num) {
    let digits = num.toString().split('').map(Number);
    console.log(Math.max(...digits));
}
//toString()ใช้แปลงตัวเชขเป็นตัวอักษร .split('')แล้วใช้มาเป็นอาเรย์แยกแต่ละตัว mapเพื่อเป็นตัวเลขอีกทีนึง maxจากนั้นหาค่าที่มากที่สุด
highestDigit(379);
highestDigit(2);
highestDigit(377401);