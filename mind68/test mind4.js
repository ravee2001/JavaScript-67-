// ตัวช่วยสำหรับคำนวณปริมาตรแต่ละกล่อง
const geometry = {
    volume: (length, width, height) => length * width * height
};

// ฟังก์ชันหลักคำนวณผลรวมปริมาตรทั้งหมด
function totalVolume(...boxes) {
    return boxes.reduce((total, box) => {
        const [length, width, height] = box;
        return total + geometry.volume(length, width, height);
    }, 0);
}

// เรียกใช้งาน(อันนี้ใช้ในกรณีจะบวกค่าทั้ง3อันรวมเป็น74)
// const result1 = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
// const result2 = totalVolume([2,2,2],[2,1,1]);
// const result3 = totalVolume([1,1,1]);
// console.log(result1,result2,result3); // Output: 63 10 1

// const total = result1 + result2 + result3;
// console.log(total);
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1])) //63
console.log(totalVolume([2,2,2],[2,1,1])) //10
console.log(totalVolume([1,1,1])) //1