let str = ['Table','Chairs','Couch'];
let iterator = str[Symbol.iterator]();

for (let word of str) {
    let iterator = word[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // output characters one by one
}
}

// for...of เพื่อวนซ้ำผ่านแต่ละคำในอาร์เรย์ str

// แต่ละคำในอาร์เรย์ str, เราจะสร้าง iterator สำหรับคำแต่ละคำด้วย word[Symbol.iterator]()

// while (true):
// ลูปนี้จะวนซ้ำไปเรื่อยๆ จนกว่าจะถึงจุดสิ้นสุดของคำ