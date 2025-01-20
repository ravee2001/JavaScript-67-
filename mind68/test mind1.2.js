function numberSpliit(...numbers) {
    const mind = (numberSpliit, b) => (numberSpliit / b).toFixed(2); // คำนวณส่วนล่างและแสดงผลทศนิยม 2 ตำแหน่ง
    const mind1 = (numberSpliit, b) => (Math.ceil(numberSpliit / b)).toFixed(2); // คำนวณส่วนบนและแสดงผลทศนิยม 2 ตำแหน่ง

    // สร้างอาร์เรย์เพื่อเก็บผลลัพธ์
    let results = numbers.map(number => {
        return [mind(number, 2), mind1(number, 2)]; // สำหรับแต่ละตัวเลขใน numbers
    });

    return results; // คืนค่าอาร์เรย์ของผลลัพธ์
}

// ทดสอบกับหลายตัวเลขและแสดงผลลัพธ์ในคอนโซล
console.log(numberSpliit(4, 10, 11, -9));  // แสดงผลลัพธ์จากการคำนวณ
console.log(numberSpliit(1, 100, 12, -99)); // แสดงผลลัพธ์จากการคำนวณ
