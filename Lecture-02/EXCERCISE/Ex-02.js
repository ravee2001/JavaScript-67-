//Create a function that takes an equation (e.g. "1+1"' ), and returns the answer.
function calculateEquation(equation){
    return eval(equation);
}

console.log(calculateEquation(1+1));
console.log(calculateEquation(5*6));
console.log(calculateEquation(10/2));

/* การทำงานของ eval()
ฟังก์ชัน eval() เป็นฟังก์ชันใน JavaScript ที่ทำหน้าที่ ประมวลผลและดำเนินการโค้ดที่เป็นสตริง (string) ที่ถูกส่งเข้าไป โดยจะพิจารณาสตริงนั้นๆ ว่าเป็นคำสั่ง JavaScript ที่สามารถทำงานได้จริงๆ

ในกรณีของสมการเช่น "1+1", "5*6", "10/2", หรือ "3-1", eval() จะทำการคำนวณและคืนค่าผลลัพธ์ของการคำนวณออกมา */

/* เมื่อเรียก calculateEquation("1+1"):

ฟังก์ชัน eval() จะประมวลผลสตริง "1+1" และคำนวณผลลัพธ์เป็น 2
eval() จะคืนค่า 2 ซึ่งจะถูกส่งกลับจากฟังก์ชัน calculateEquation */