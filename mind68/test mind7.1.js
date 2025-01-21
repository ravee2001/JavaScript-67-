function sumTwoSmallestNums(params) {
    // กรองเฉพาะตัวเลขบวกออกจากอาร์เรย์
    let positiveNumbers = params.filter(element => {
        return typeof element === 'number' && element > 0; // ตรวจสอบว่าเป็นตัวเลขและมากกว่า 0
    });

    if (positiveNumbers.length < 2) {
        console.log("Error: ไม่สามารถหาผลรวมได้ เนื่องจากมีตัวเลขบวกน้อยกว่า 2 ตัว");
        return;
    }

    // จัดเรียงตัวเลขจากน้อยไปมาก
    positiveNumbers.sort((a, b) => a - b);

    // หาผลรวมของตัวเลขที่น้อยที่สุด 2 ตัว
    const result = positiveNumbers[0] + positiveNumbers[1];

    // แสดงผลลัพธ์
    console.log(result);
}

// ตัวอย่างการเรียกใช้ฟังก์ชัน
sumTwoSmallestNums([19, 5, 42, 2, 77]);             // Output: 7 (2 + 5)
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]); // Output: 3453455 (10 + 343445353)
sumTwoSmallestNums([2, 9, 6, -1]);                  // Output: 8 (2 + 6)
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, -791, -587]); // Output: 563 (221 + 342)
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]); // Output: 4519 (1617 + 2902)
sumTwoSmallestNums([1, "A", -2, 5, true]);          // Output: 6 (1 + 5)
sumTwoSmallestNums(["A", "B", "#", -10]);           // Output: Error
