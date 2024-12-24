const arrayOfNumbers = [1, 2, 3, 4]; // สร้างอาร์เรย์ชื่อ arrayOfNumbers ที่มีสมาชิกคือ [1, 2, 3, 4]

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); //10

// reduce(callback, initialValue):
// ใช้เพื่อลดอาร์เรย์ให้เหลือค่าเดียว โดยการดำเนินการ (เช่น บวก, คูณ, หรือดำเนินการอื่น ๆ) กับสมาชิกในอาร์เรย์
// ทำงานโดยวนลูปผ่านสมาชิกในอาร์เรย์ และเรียกใช้ฟังก์ชัน callback กับค่าที่สะสม (accumulator) และค่าปัจจุบัน (currentValue)
// initialValue (ค่าตั้งต้นของ accumulator) เป็นค่าเริ่มต้น ถ้าไม่กำหนดจะใช้สมาชิกตัวแรกในอาร์เรย์เป็นค่าเริ่มต้น





// การทำงานในโค้ด:
// อาร์เรย์ arrayOfNumbers = [1, 2, 3, 4]
// reduce() เริ่มต้นจากการใช้ตัวแรกของอาร์เรย์ (ค่าเริ่มต้น) และบวกสมาชิกตัวถัดไปทั้งหมด

// รอบแรก:
//  accumulator = 1 (ค่าเริ่มต้น)
//  currentValue = 2 (สมาชิกตัวถัดไป)
//  accumulator + currentValue = 1 + 2 = 3

// รอบที่สอง:
//  accumulator = 3 (ผลลัพธ์จากรอบก่อนหน้า)
//  currentValue = 3 (สมาชิกตัวถัดไป)
//  accumulator + currentValue = 3 + 3 = 6

// รอบที่สาม:
//  accumulator = 6 (ผลลัพธ์จากรอบก่อนหน้า)
//  currentValue = 4 (สมาชิกตัวถัดไป)
//  accumulator + currentValue = 6 + 4 = 10

// สิ้นสุด:
//  ผลลัพธ์สุดท้ายคือ 10 และถูกเก็บไว้ในตัวแปร sum

// สรุป
// reduce() ใช้สำหรับการสะสมค่าผ่านสมาชิกในอาร์เรย์
// ในตัวอย่างนี้ ผลลัพธ์ของการรวมตัวเลขทั้งหมดในอาร์เรย์ [1, 2, 3, 4] คือ 10