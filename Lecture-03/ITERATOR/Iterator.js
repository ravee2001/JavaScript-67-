let str = "Hello";

// does the same as
// for (let char of str) console.loh(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // output characters one by one
}






// 1. str[Symbol.iterator]():
// 1.1 Symbol.iterator เป็น built-in symbol ที่ใช้ในการสร้าง iterator สำหรับออบเจ็กต์ต่างๆ เช่น อาร์เรย์, สตริง, และออบเจ็กต์อื่นๆ ที่รองรับการวนซ้ำ
// 1.2 ในที่นี้ สตริง str จะใช้ Symbol.iterator เพื่อสร้าง iterator ซึ่งจะสามารถใช้ next() เพื่อดึงค่าตัวอักษรจากสตริงได้ทีละตัว


// 2. iterator.next():
//      2.1 next() เป็นเมธอดที่ใช้เพื่อดึงค่าถัดไปจาก iterator
//      2.2 result ที่ได้จาก next() จะมีสองคุณสมบัติ:
//              2.2.1 value: ค่าของสมาชิกถัดไปจาก iterator (ในที่นี้คือแต่ละตัวอักษรของสตริง)
//              2.2.2 done: เป็นบูลีนที่บ่งชี้ว่า iterator ถึงจุดสิ้นสุดหรือยัง ถ้าเป็น true หมายความว่าไม่มีค่าถัดไปแล้ว

// 3. if (result.done) break;:
//      3.1 ถ้า done เป็น true หมายความว่า iterator ถึงจุดสิ้นสุดของสตริงแล้ว ให้หยุดลูป

// 4. console.log(result.value);:
//      4.1 พิมพ์ตัวอักษรที่ได้จาก result.value

// การทำงานของโค้ด
//  1. สตริง "Hello" จะถูกใช้สร้าง iterator ที่วนซ้ำผ่านตัวอักษร "H", "e", "l", "l", "o"
//  2. ในแต่ละรอบของ while loop:
//      2.1 iterator.next() จะดึงตัวอักษรถัดไปจากสตริง
//      2.2 เมื่อ done เป็น true (หมายความว่าไม่มีตัวอักษรให้ดึงอีกแล้ว) ลูปจะหยุด