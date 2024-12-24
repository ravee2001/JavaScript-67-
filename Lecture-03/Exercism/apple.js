// let values1 = ['Apple', 1, true];
// let values1 = ['Fries', 2, true];
// let values1 = ['Mars', 9, 'Apple';

const values = [
    ['Apple', 1, true],
    ['Fries', 2, true],
    ['Mars', 9, 'Apple']
];

// ใช้ map() เพื่อแสดงผลลัพธ์แต่ละอาร์เรย์ใน values
values.map((item, index) => {
    console.log(`values ${index + 1}=`, item);
});
