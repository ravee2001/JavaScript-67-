const status = 'error'

if (status.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}

// 1. การประกาศตัวแปร
/* const status = 'error';
   -ใช้ const เพื่อประกาศตัวแปรชื่อ status และกำหนดค่าเริ่มต้นเป็น 'error'
   -const หมายความว่า ตัวแปรนี้ไม่สามารถเปลี่ยนค่าได้หลังจากที่กำหนดแล้ว

   2. การใช้คำสั่งเงื่อนไข (if...else) โค้ดนี้ใช้คำสั่งเงื่อนไขเพื่อตรวจสอบค่าของ status: 
    
   if (status.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
    }
จบ#การใช้คำสั่งเงื่อนไข (if...else)



ส่วนด้านใน(if...else)ดังนี้
#status.toUpperCase():
  -ใช้เมธอด toUpperCase() เพื่อแปลงข้อความในตัวแปร status ให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
  -ถ้า status คือ 'error' การแปลงจะทำให้มันเป็น 'ERROR'
#การตรวจสอบ:
  -ตรวจสอบว่า status.toUpperCase() (ซึ่งตอนนี้กลายเป็น 'ERROR') เท่ากับ 'ERROR' หรือไม่ โดยใช้การเปรียบเทียบแบบ เข้มงวด (===)
  -ถ้าเงื่อนไขนี้เป็นจริง (true), ฟังก์ชันจะทำงานในบล็อกนี้ และพิมพ์ข้อความ "Something went wrong!"
จบ#status.toUpperCase():



else {
    console.log('Looks great!!');
}

-ถ้าเงื่อนไขใน if เป็นเท็จ (false), จะทำงานในส่วน else
-ถ้า status ไม่เท่ากับ 'ERROR' (เช่น 'error', 'success', 'warning' เป็นต้น) ฟังก์ชันจะพิมพ์ "Looks great!!"


3. การทำงานของโค้ด
  -ค่าของตัวแปร status คือ 'error'
  -เมื่อใช้ toUpperCase() จะได้ 'ERROR'
  -การเปรียบเทียบ 'ERROR' === 'ERROR' เป็นจริง (true)

ดังนั้น, ฟังก์ชันจะพิมพ์: Something went wrong!
   */


