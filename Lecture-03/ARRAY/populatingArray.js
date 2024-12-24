let arr1 = ["A", true, 2]; 

console.log("\n********Length and index********\n"); 
console.log(arr1.length); 
console.log(arr1[3]); //Doesn't exist 
console.log(arr1[2]); //Last index of array 
console.log(arr1[arr1.length - 1]); //Equals 2 

// การทำงาน:
// arr1: อาร์เรย์นี้ถูกสร้างขึ้นพร้อมสมาชิก 3 ตัวคือ "A" (string), true (boolean), และ 2 (number)
// arr1.length: แสดงความยาวของอาร์เรย์ คือ 3
// arr1[3]: พยายามเข้าถึงสมาชิกในตำแหน่งที่ 3 (เกินกว่าที่อาร์เรย์มีอยู่) ซึ่งจะได้ค่า undefined
// arr1[2]: เข้าถึงสมาชิกตัวสุดท้ายในอาร์เรย์ (ตำแหน่งที่ 2) ซึ่งมีค่าเป็น 2
// arr1[arr1.length - 1]: เป็นการเข้าถึงสมาชิกตัวสุดท้ายของอาร์เรย์โดยใช้สูตร length - 1 ซึ่งจะได้ค่า 2 เช่นกัน

console.log("\n********Length and index Part 2********\n"); 
let arr3= Array(3); //Empty array of length 3 
arr3[2] = "Adding a value!"; 
console.log(arr3[2]); //Lest index of array 
console.log(arr3[arr3.length - 1]); //index: 2 
console.log(arr3[0]); //No value yet 
console.log(arr3[1]); //No value yet 

// การทำงาน:
// let arr3 = Array(3);: สร้างอาร์เรย์ว่างที่มีความยาว 3 ([undefined, undefined, undefined]) แต่ยังไม่มีค่าใด ๆ ถูกกำหนดในแต่ละตำแหน่ง
// arr3[2] = "Adding a value!";: กำหนดค่า "Adding a value!" ให้กับตำแหน่งที่ 2 ของอาร์เรย์ ([undefined, undefined, "Adding a value!"])
// arr3[2]: แสดงค่าของตำแหน่งที่ 2 คือ "Adding a value!"
// arr3[arr3.length - 1]: แสดงค่าของสมาชิกตัวสุดท้ายในอาร์เรย์ (ตำแหน่งที่ 2) ซึ่งเท่ากับ "Adding a value!"
// arr3[0] และ arr3[1]: ตำแหน่งที่ 0 และ 1 ไม่มีค่าที่กำหนด ดังนั้นค่าจะเป็น undefined









// สรุป
// การเข้าถึงสมาชิกที่อยู่นอกขอบเขตของอาร์เรย์ (index เกิน) จะได้ค่า undefined
// การใช้ length - 1 เป็นวิธีทั่วไปในการเข้าถึงสมาชิกตัวสุดท้ายของอาร์เรย์
// เมื่อสร้างอาร์เรย์ด้วย Array(length):
// อาร์เรย์จะมีความยาวตามที่กำหนด แต่ค่าของแต่ละตำแหน่งจะเป็น undefined จนกว่าจะมีการกำหนดค่าใหม่
// โค้ดนี้ช่วยแสดงแนวทางการทำงานกับอาร์เรย์ทั้งแบบที่กำหนดค่าทันทีและแบบกำหนดความยาวล่วงหน้า.

