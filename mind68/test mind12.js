function digitalClock(seconds) {
    // คำนวณจำนวนชั่วโมง นาที และวินาทีที่เหลือ
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    // จัดรูปแบบเป็น HH:MM:SS พร้อมเติมเลข 0 ด้านหน้าให้ครบสองหลัก
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');
  }
  
  // ตัวอย่างการใช้งาน
  console.log(digitalClock(5025));   // ผลลัพธ์: "01:23:45"
  console.log(digitalClock(61201));  // ผลลัพธ์: "17:00:01"
  console.log(digitalClock(87000));  // ผลลัพธ์: "00:10:00"