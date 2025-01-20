function digitalClock(extra, seconds) {
    let totalSeconds = seconds;

    // แปลงเวลาพิเศษที่เพิ่มเข้ามาเป็นวินาที
    if (extra.includes('y')) {
        const years = parseInt(extra);
        totalSeconds += years * 365 * 24 * 3600; // ปีละ 365 วัน
    } else if (extra.includes('m')) {
        const months = parseInt(extra);
        totalSeconds += months * 30 * 24 * 3600; // เดือนละ 30 วัน (โดยประมาณ)
    } else if (extra.includes('d')) {
        const days = parseInt(extra);
        totalSeconds += days * 24 * 3600; // วันละ 24 ชั่วโมง
    }

    // คำนวณจำนวนชั่วโมง นาที และวินาทีที่เหลือ
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    // จัดรูปแบบเป็น HH:MM:SS พร้อมเติมเลข 0 ด้านหน้าให้ครบสองหลัก
    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
}

// ตัวอย่างการใช้งาน
console.log(digitalClock("33y", 5025));  // "01:23:45"
console.log(digitalClock("42m", 61201)); // "17:00:01"
console.log(digitalClock("31d", 87000)); // "00:10:00"
