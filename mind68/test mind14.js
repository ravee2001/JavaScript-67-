function secretWord(str, len) {
    // ฟังก์ชันแปลงตัวอักษรเป็นค่าเลข a=1, b=2, ..., z=26
    const charToValue = (char) => char.charCodeAt(0) - 96;

    // สร้าง array ของ triplets และคำนวณค่าเลขของแต่ละ triplet
    let triplets = [];
    for (let i = 0; i < str.length - 2; i++) {
        const triplet = str.slice(i, i + 3);
        const value = triplet.split("").reduce((sum, char) => sum + charToValue(char), 0);
        triplets.push({ triplet, value });
    }

    // ค้นหา subsequence ที่เป็น arithmetic sequence
    for (let i = 0; i < triplets.length; i++) {
        let sequence = [triplets[i]];
        for (let j = i + 1; j < triplets.length && sequence.length < len; j++) {
            if (
                sequence.length === 1 || // ค่าที่สองเป็นลำดับถัดไป
                triplets[j].value - sequence[sequence.length - 1].value ===
                    sequence[1].value - sequence[0].value
            ) {
                sequence.push(triplets[j]);
            }
        }

        // ถ้าพบลำดับที่มีขนาดเท่าคำลับ (len)
        if (sequence.length === len) {
            return sequence.map((item) => item.triplet[1]).join(""); // เอาเฉพาะตัวอักษรตรงกลางของ triplet
        }
    }

    return "no secret word found";
}

// ตัวอย่างการทดสอบ
console.log(secretWord("sadbpstcrdvaefikkgoenqrt", 5)); // Output: "brake"
console.log(secretWord("aheiyayd", 3));                 // Output: "hey"
