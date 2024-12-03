function test(t) {                 // ฟังก์ชัน test: | พารามิเตอร์ t:
    if (t == undefined) {          // เงื่อนไขในif--> if (t == undefined)ตรวจสอบว่าค่าของ t เป็น undefined หรือไม่ |ใช้การเปรียบเทียบแบบ หลวม (==) ซึ่งจะประเมินว่าค่า undefined และ null ถือว่าเท่ากัน และ หาก t เป็น undefined หรือ null
        return "undefined value!"; // ฟังก์ชันจะ: return "undefined value!"; (ส่งคืนข้อความ "undefined value!")
    }
    return t;                      // หาก t มีค่า (ไม่ใช่ undefined หรือ null) ฟังก์ชันจะ return t; (ส่งคืนค่าของ t)

}

let x;                            // การประกาศตัวแปร ตัวแปร x ถูกประกาศโดยใช้ let และ ไม่มีการกำหนดค่าให้กับ x ดังนั้นค่าของมันคือ undefined
console.log(test(x));             // เรียกฟังก์ชัน test พร้อมส่งค่า x (ซึ่งคือ undefined)
                                  // การทำงานในฟังก์ชัน: t == undefined จะเป็น true เนื่องจาก x คือ undefined
                                  //                : ฟังก์ชันจึงส่งคืน "undefined value!"
                                  // ผลลัพธ์ที่แสดง: undefined value!

// **สรุป**
// โค้ดนี้ตรวจสอบว่าค่าที่ส่งให้ฟังก์ชัน test เป็น undefined หรือไม่:
// 1.ถ้าเป็น undefined หรือ null จะคืนข้อความ "undefined value!"
// 2.ถ้าไม่เป็น undefined จะคืนค่าที่ส่งเข้ามา
// ตัวอย่างเพิ่มเติม: console.log(test(42));      // Output: 42
              // console.log(test(null));    // Output: undefined value!
              // console.log(test("Hello")); // Output: Hello
//จบ โค้ดนี้มีประโยชน์สำหรับการตรวจสอบค่า undefined หรือ null ก่อนนำไปใช้งาน