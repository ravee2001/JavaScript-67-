function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels("seeing"));


// function getVowels(str) {
//        ...code...
// }
// ฟังก์ชัน getVowels ถูกประกาศขึ้นมาเพื่อรับ ข้อความ (str) เป็นพารามิเตอร์
// ฟังก์ชันนี้จะนับจำนวน สระภาษาอังกฤษ (a, e, i, o, u) ในข้อความที่ส่งมา
//*
//*
// const m = str.match(/[aeiou]/gi);
// ใช้ str.match() ซึ่งเป็นเมธอดสำหรับจับคู่ข้อความใน str กับ รูปแบบ (pattern) ที่กำหนดโดย Regular Expression (RegEx)

// รายละเอียด RegEx /[aeiou]/gi:
// [aeiou]: ชุดของตัวอักษรที่ต้องการจับคู่ (a, e, i, o, u)
// g: Global flag ให้ค้นหาทุกตำแหน่งในข้อความ
// i: Case-insensitive flag ให้จับคู่ตัวอักษรโดยไม่สนใจว่าเป็นตัวพิมพ์เล็กหรือพิมพ์ใหญ่
// **ผลลัพธ์ของ** .match():
// คืนค่าที่เป็น อาเรย์ ของตัวอักษรที่จับคู่ได้ทั้งหมด
// ถ้าไม่มีการจับคู่ คืนค่า null
//*
//*
// if (m === null) {
//    return 0;
// }
// ตรวจสอบว่าผลลัพธ์ที่ได้จาก .match() คือ null หรือไม่
// ถ้า null หมายถึงไม่มีสระในข้อความ ให้คืนค่า 0
// ถ้าไม่ใช่ null ให้ดำเนินการต่อ
//*
//*
// return m.length;
// ใช้ .length เพื่อคืนค่าจำนวนตัวอักษรในอาเรย์ m (ซึ่งคือจำนวนสระที่พบในข้อความ)
//*
//*
// console.log(getVowels("seeing"));
// เรียกฟังก์ชัน getVowels และส่งข้อความ "seeing"
// ผลลัพธ์ของ str.match(/[aeiou]/gi) คือ ["e", "e", "i"] -มี 3 ตัวอักษรในอาเรย์ -ผลลัพธ์ของ m.length คือ 3
// ดังนั้น console.log() จะแสดง: 3



// **สรุป**
// ฟังก์ชัน getVowels:
// 1.รับข้อความเข้ามา
// 2.ใช้ RegEx เพื่อจับคู่และค้นหาสระ (a, e, i, o, u)
// 3.ตรวจสอบว่าพบสระหรือไม่
// 4.คืนค่าจำนวนสระที่พบ
// ตัวอย่างการใช้งาน: console.log(getVowels("hello"));   // Output: 2 (e, o)
                // console.log(getVowels("sky"));     // Output: 0
                // console.log(getVowels("AEIOU"));   // Output: 5 (case-insensitive)
