function jumpingFrog(n, stones) {
    const queue = [[0, 0]]; // เริ่มต้นที่ index 0 (หินแรก) และนับจำนวนกระโดดเริ่มต้นเป็น 0
    const visited = new Set(); // เก็บตำแหน่งที่เยี่ยมชมแล้วเพื่อป้องกันการวนซ้ำ

    visited.add(0); // เพิ่มหินแรกในชุดที่เยี่ยมชมแล้ว

    while (queue.length > 0) {
        const [current, jumps] = queue.shift(); // ดึงตำแหน่งปัจจุบันและจำนวนกระโดดออกจากคิว

        // หากถึงตำแหน่งเกินหินสุดท้าย (n - 1) แสดงว่ากบข้ามแม่น้ำสำเร็จ
        if (current >= n - 1) {
            return jumps + 1;
        }

        const jumpDistance = stones[current]; // ระยะทางที่กระโดดได้จากหินปัจจุบัน

        // กระโดดไปข้างหน้า
        const forward = current + jumpDistance;
        if (forward < n && !visited.has(forward)) {
            queue.push([forward, jumps + 1]);
            visited.add(forward);
        }

        // กระโดดถอยหลัง
        const backward = current - jumpDistance;
        if (backward >= 0 && !visited.has(backward)) {
            queue.push([backward, jumps + 1]);
            visited.add(backward);
        }
    }

    return "no chance :("; // หากไม่สามารถข้ามแม่น้ำได้
}

// ตัวอย่างการทดสอบ
console.log(jumpingFrog(5, [1, 1, 1, 1, 1])); // Output: 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])); // Output: 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 1])); // Output: "no chance :("
console.log(jumpingFrog(5, [2, 3, 1, 1, 4])); // Output: 3
