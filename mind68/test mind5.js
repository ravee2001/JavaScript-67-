function getBudgets(Json) {
    let Sumbudget = 0;
    let allBudgets = []; // เก็บงบประมาณทั้งหมดสำหรับการจัดเรียง

    Json.forEach(bud => {
        Sumbudget += bud.budget; // รวมค่า budget
        allBudgets.push(bud.budget); // เพิ่มค่า budget ในอาร์เรย์
    });

    // จัดเรียงค่า budget ทั้งหมดจากมากไปน้อย
    allBudgets.sort((a, b) => b - a);

    // แสดงผลรวมและรายการที่จัดเรียงแล้ว
    console.log(`Sum: ${Sumbudget}`);
    console.log(`Sorted Budgets: ${allBudgets.join(", ")}`);
}

// เรียกใช้งานฟังก์ชัน
getBudgets([
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700},
]);

getBudgets([
    {name: "John", age: 21, budget: 29000},
    {name: "Steve", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600},
]);

