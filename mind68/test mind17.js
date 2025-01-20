function bomb(sensors) {
    const speedOfSound = 0.343; // ความเร็วเสียง (กิโลเมตร/วินาที)
  
    // ฟังก์ชันหาความห่างเชิงเรขาคณิต
    function distance(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }
  
    // ข้อมูลจากเซ็นเซอร์
    const [s1, s2, s3] = sensors;
  
    // คำนวณรัศมีวงกลมของแต่ละเซ็นเซอร์ (ระยะทาง = เวลา * ความเร็วเสียง)
    const r1 = s1[2] * speedOfSound;
    const r2 = s2[2] * speedOfSound;
    const r3 = s3[2] * speedOfSound;
  
    // ใช้วิธีการเชิงตัวเลขเพื่อประมาณหาจุดที่เหมาะสมที่สุด
    let bestX = 0, bestY = 0;
    let minError = Infinity;
  
    // ลองไล่ทุกพิกัดภายในขอบเขต 50x50
    for (let x = 0; x <= 50; x++) {
      for (let y = 0; y <= 50; y++) {
        const d1 = distance(x, y, s1[0], s1[1]);
        const d2 = distance(x, y, s2[0], s2[1]);
        const d3 = distance(x, y, s3[0], s3[1]);
  
        // คำนวณข้อผิดพลาด (error) ระหว่างระยะจริงและระยะที่คาดไว้
        const error = Math.abs(d1 - r1) + Math.abs(d2 - r2) + Math.abs(d3 - r3);
  
        if (error < minError) {
          minError = error;
          bestX = x;
          bestY = y;
        }
      }
    }

    return [bestX, bestY]; // คืนค่าพิกัดที่ดีที่สุด
  }
  
  // ตัวอย่างการใช้งาน
  console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]])); // → [0, 25]
  console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]])); // → [0, 0]
  console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]])); // → [21, 13]
  console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]])); // → [8, 35]
  