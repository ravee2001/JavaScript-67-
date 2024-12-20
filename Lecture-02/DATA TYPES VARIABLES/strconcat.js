let str1 = "Hello";      //ตัวแปร str1 ถูกกำหนดให้มีค่าเป็น "Hello"
let str2 = "World!";     //ตัวแปร str2 ถูกกำหนดให้มีค่าเป็น "World!"
                         //ทั้งสองตัวแปรใช้คำสั่ง let ซึ่งสามารถเปลี่ยนค่าได้ในภายหลัง


//Using the + operator
console.log("********Using the + operator********\n"); //ใช้คำสั่ง console.log() เพื่อพิมพ์ข้อความ "********Using the + operator********" และ สัญลักษณ์ \n หมายถึงการ ขึ้นบรรทัดใหม่
console.log(str1 + str2);                              //ใช้เครื่องหมาย + เพื่อเชื่อมข้อความในตัวแปร str1 และ str2 เข้าด้วยกัน และ เนื่องจาก str1 ไม่มีช่องว่างท้ายคำ (Hello) ผลลัพธ์จึงเป็น:
console.log(str1 + "Big" + str2);                      //ใช้เครื่องหมาย + เพื่อเชื่อม str1, "Big", และ str2
//ผลลัพธ์คือ HelloBigWorld!

console.log("\n********Adding Spacing********\n");  //ใช้คำสั่ง console.log() เพื่อพิมพ์ข้อความ "********Adding Spacing********" และ สัญลักษณ์ \n หมายถึงการ ขึ้นบรรทัดใหม่
//Adding Spacing
str1 = "Hello ";                                    //เปลี่ยนค่าในตัวแปร str1 | ตัวแปร str1 ถูกเปลี่ยนค่าเป็น "Hello " (เพิ่มช่องว่างท้ายคำ)

console.log(str1 + str2); // เชื่อมข้อความ str1 (ที่มีช่องว่างท้ายคำ) กับ str2
                          // ผลลัพธ์คือ:Hello World!
console.log(str1 + "Big" + str2) // เชื่อมข้อความ str1, "Big", และ str2
                                 // ผลลัพธ์คือ:Hello BigWorld!



// สรุป โค้ดนี้แสดงการ:
// 1.ใช้ + เชื่อมข้อความ (Concatenation)
// 2.ปรับแต่งค่าในตัวแปร (เพิ่มช่องว่างในstr1) เพื่อให้ข้อความแสดงผลได้เหมาะสม
// 3.ใช้คำสั่ง console.log() เพื่อแสดงข้อความและผลลัพธ์ออกมาบนหน้าจอ Console
