function count_animals(txt) {
    const animals = [
      "dog", "cat", "bat", "cock", "cow", "pig",
      "fox", "ant", "bird", "lion", "wolf", "deer",
      "bear", "frog", "hen", "mole", "duck", "goat"
    ];
  
    // ฟังก์ชัน Backtracking
    function backtrack(letters) {
      let maxCount = 0;
  
      for (const animal of animals) {
        const tempLetters = [...letters];
        let canForm = true;
  
        // ตรวจสอบว่าชื่อสัตว์นี้สร้างได้หรือไม่
        for (const char of animal) {
          const index = tempLetters.indexOf(char);
          if (index === -1) {
            canForm = false;
            break;
          }
          tempLetters.splice(index, 1); // ลบตัวอักษรที่ใช้แล้วออก
        }
  
        if (canForm) {
          // หากสร้างได้ ให้ลองสร้างตัวถัดไป และเก็บผลลัพธ์ที่ดีที่สุด
          maxCount = Math.max(maxCount, 1 + backtrack(tempLetters));
        }
      }
  
      return maxCount;
    }
  
    // เรียกใช้ฟังก์ชัน Backtracking
    return backtrack(txt.split(""));
  }
  
  // ตัวอย่างการใช้งาน
  console.log(count_animals("goatcode")); // → 2
  console.log(count_animals("cockdogwdufrbir")); // → 4
  console.log(count_animals("dogdogdogdogdog")); // → 5
  