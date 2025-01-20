function getBudgets(Json) {
    let Sumbudget = 0;           // สำหรับเก็บผลรวม budget
    let allBudgets = [];         // เก็บงบประมาณทั้งหมดสำหรับการจัดเรียง

    Json.forEach(bud => {
        Sumbudget += bud.budget;     // รวมค่า budget
        allBudgets.push(bud.budget); // เพิ่มค่า budget ลงในอาร์เรย์
    });

    // จัดเรียง budget ทั้งหมดจากมากไปน้อย
    allBudgets.sort((a, b) => b - a);

    // แสดงผลรวมและรายการที่จัดเรียงแล้ว
    console.log(`Sum: ${Sumbudget}`);
    console.log(`Sorted Budgets: ${allBudgets.join(", ")}`);
}

// เรียกใช้งานฟังก์ชัน
getBudgets([
    {name: "John", lastName: "Smith", age: 21, budget: 23000},
    {name: "Steve", lastName: "Brown", age: 32, budget: 40000},
    {name: "Martin", lastName: "Green", age: 16, budget: 2700},
    {name: "BOSS", lastName: "THAI", age: 16, budget: 2900},  // เพิ่มข้อมูลใหม่
    {name: "MOSS#", lastName: "WATSON", age: 16, budget: 2900} // เพิ่มข้อมูลใหม่
]);
