// let values1 = ['Apple', 1, true];
// let values1 = ['Fries', 2, true];
// let values1 = ['Mars', 9, 'Apple';

const values1 = {
    name: "Pipey",       // พร็อพเพอร์ตี้ name มีค่าเริ่มต้นเป็น "Pipey"
    age: 8,              // พร็อพเพอร์ตี้ age มีค่าเริ่มต้นเป็น 8
    whatName() {         // ฟังก์ชัน whatName
        return this.name; // คืนค่าพร็อพเพอร์ตี้ name ของออบเจ็กต์นี้
    },
};