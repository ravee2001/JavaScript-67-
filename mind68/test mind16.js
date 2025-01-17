function frequencySort(s) {
    // สร้างแผนที่เก็บตัวอักษรและความถี่
    const frequencyMap = new Map();

    // นับความถี่ของตัวอักษร
    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // แปลง Map เป็น Array และเรียงลำดับตามเงื่อนไข
    const sortedChars = Array.from(frequencyMap.entries()).sort((a, b) => {
        const [charA, freqA] = a;
        const [charB, freqB] = b;

        // เรียงตามความถี่มากไปน้อย
        if (freqA !== freqB) return freqB - freqA;

        // ถ้าความถี่เท่ากัน ตัวพิมพ์ใหญ่ต้องมาก่อน
        if (charA.toLowerCase() === charB.toLowerCase()) {
            return charA < charB ? 1 : -1;
        }

        // ถ้าความถี่เท่ากัน และไม่ใช่ตัวเดียวกัน เรียงตามลำดับตัวอักษร
        return charA.localeCompare(charB);
    });

    // สร้างสตริงใหม่จากการเรียง
    return sortedChars.map(([char, freq]) => char.repeat(freq)).join('');
}

// ตัวอย่างการใช้งาน
console.log(frequencySort("tree"));     // Output: "eert"
console.log(frequencySort("cccaaa"));  // Output: "aaaaccc"
console.log(frequencySort("Aabb"));     // Output: "bbAa"