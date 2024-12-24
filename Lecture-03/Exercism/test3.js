let value1 = ['Apple', 1, false];
let value2 = ['Fries', 2, true];
let value3 = ['Mars', 9, 'Apple'];

// แปลงอาร์เรย์เป็น Set
let set1 = new Set(value1);
let set2 = new Set(value2);
let set3 = new Set(value3);

// หาค่าซ้ำในทั้งสาม Set
let commonItems = [...set1].filter(item => set2.has(item) && set3.has(item));

console.log(commonItems); // ['Apple']
