let arr1 = ["A", true, 2];

//Push and pop
console.log("\n********Push and pop********\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); //Remove last value
console.log(arr1);

// การทำงาน:
// push(value): 
// 1.ใช้เพื่อเพิ่มสมาชิกใหม่ที่ตำแหน่งท้ายของอาร์เรย์
// 2.คืนค่าความยาวใหม่ของอาร์เรย์
// 3.ผลลัพธ์: เพิ่ม "new value" เข้าไปใน arr1 ทำให้ arr1 กลายเป็น ["A", true, 2, "new value"]
// 4.คืนค่าความยาวใหม่: 4
// pop():
// 1.ใช้เพื่อลบสมาชิกตัวสุดท้ายของอาร์เรย์
// 2.คืนค่าของสมาชิกที่ถูกลบออก
// 3.ผลลัพธ์: ลบ "new value" ออกจาก arr1 ทำให้ arr1 กลายเป็น ["A", true, 2]


//Shift and unshift
console.log("\n********shift and unshift********\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); //Remove first value
console.log(arr1);

// การทำงาน:
// unshift(value):
// 1.ใช้เพื่อเพิ่มสมาชิกใหม่ที่ตำแหน่งแรกของอาร์เรย์
// 2.คืนค่าความยาวใหม่ของอาร์เรย์
// 3.ผลลัพธ์: เพิ่ม "new value" ที่ตำแหน่งแรกของ arr1 ทำให้ arr1 กลายเป็น ["new value", "A", true, 2]
// 4.คืนค่าความยาวใหม่: 4
// shift():
// 1.ใช้เพื่อลบสมาชิกตัวแรกของอาร์เรย์
// 2.คืนค่าของสมาชิกที่ถูกลบออก
// 3.ผลลัพธ์: ลบ "new value" ออกจาก arr1 ทำให้ arr1 กลายเป็น ["A", true, 2]


//Concat
console.log("\n********Concat********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);

// การทำงาน:
// 1.concat(array):
// 2.ใช้เพื่อรวมอาร์เรย์หลายตัวเข้าด้วยกัน โดยจะสร้างอาร์เรย์ใหม่จากการรวมกัน (อาร์เรย์ต้นฉบับไม่ถูกเปลี่ยน)
// 3.ตัวอย่างการใช้งาน:
// newArr = arr1.concat(arr2):
//      รวม arr1 (["A", true, 2]) กับ arr2 (["B", false, 3])
//      ผลลัพธ์: ["A", true, 2, "B", false, 3]
// newArr2 = arr2.concat([1, 2, 3]):
//      รวม arr2 (["B", false, 3]) กับอาร์เรย์ [1, 2, 3]
//      ผลลัพธ์: ["B", false, 3, 1, 2, 3]








// สรุป
// push: เพิ่มสมาชิกใหม่ที่ท้ายอาร์เรย์
// pop: ลบสมาชิกตัวสุดท้ายและคืนค่าที่ลบ
// unshift: เพิ่มสมาชิกใหม่ที่ตำแหน่งแรก
// shift: ลบสมาชิกตัวแรกและคืนค่าที่ลบ
// concat: รวมอาร์เรย์หลายตัวเข้าด้วยกันโดยสร้างอาร์เรย์ใหม่
// โค้ดนี้แสดงวิธีจัดการสมาชิกในอาร์เรย์ได้อย่างครบถ้วนในแบบพื้นฐาน.


//ถ้าเป็นคิวลี่ใช้คำสั่ง push , shift