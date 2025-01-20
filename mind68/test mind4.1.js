function totalVolume(...boxes) {
    // ตัวแปรเก็บค่าที่ไม่ใช่ตัวเลข
    const invalidValues = [];
    
    // คำนวณปริมาตร
    const total = boxes.reduce((sum, box) => {
        // ตรวจสอบแต่ละค่าภายใน box
        const isValidBox = box.every(value => {
            if (typeof value !== "number" || isNaN(value)) {
                invalidValues.push(value); // เก็บค่าที่ไม่ใช่ตัวเลข
                return false; // ไม่ใช่ตัวเลข
            }
            return true; // เป็นตัวเลข
        });

        // ถ้าค่าทั้งหมดใน box เป็นตัวเลข ให้คำนวณปริมาตร
        return isValidBox ? sum + (box[0] * box[1] * box[2]) : sum;
    }, 0);

    // แสดงค่าที่ไม่ใช่ตัวเลข
    if (invalidValues.length > 0) {
        console.log("Invalid values detected:", invalidValues);
    }

    return total;
}

// ตัวอย่างการเรียกใช้
console.log(totalVolume([4, 2, 4], [3, "a", 3], [1, 1, 2], [2, 1, "!"])); // Output: 34
console.log(totalVolume([2, 2, 2], [2, "b", 1])); // Output: 8
console.log(totalVolume([1, 1, 1, "$"])); // Output: 1
