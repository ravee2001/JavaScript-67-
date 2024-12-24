const cat = {
    name: "Pipey",       // พร็อพเพอร์ตี้ name มีค่าเริ่มต้นเป็น "Pipey"
    age: 8,              // พร็อพเพอร์ตี้ age มีค่าเริ่มต้นเป็น 8
    whatName() {         // ฟังก์ชัน whatName
        return this.name; // คืนค่าพร็อพเพอร์ตี้ name ของออบเจ็กต์นี้
    },
};


console.log(cat.whatName()); //Output: Pipey
// เมื่อเรียกใช้ cat.whatName():
//      this.name จะคืนค่าพร็อพเพอร์ตี้ name ของ cat ซึ่งขณะนี้คือ "Pipey"
// ผลลัพธ์: "Pipey"

cat.name = "Nezzar"; //พร็อพเพอร์ตี้ name ของออบเจ็กต์ cat ถูกเปลี่ยนจาก "Pipey" เป็น "Nezzar"

console.log(cat.whatName());
// เมื่อเรียกใช้ cat.whatName() อีกครั้ง:
//      this.name จะคืนค่าพร็อพเพอร์ตี้ name ของ cat ซึ่งตอนนี้ถูกเปลี่ยนเป็น "Nezzar"
// ผลลัพธ์: "Nezzar"
