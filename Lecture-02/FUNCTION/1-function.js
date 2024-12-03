// 1. Function Definition 
function printHello(name){
    console.log("Hello "+name);
    return name +" hello!";
}

console.log(printHello.name)

//2.Function Invocation
let result = printHello("sirinya !");
console.log(result);



/* 1. การประกาศฟังก์ชัน (Function Definition)

function printHello(name){
    console.log("Hello "+name);
    return name +" hello!";
}

ชื่อฟังก์ชัน: ฟังก์ชันนี้มีชื่อว่า printHello
-พารามิเตอร์: ฟังก์ชันนี้รับพารามิเตอร์ name ซึ่งเป็นค่าที่จะส่งเข้าไปในฟังก์ชันเมื่อเรียกใช้
-การทำงานของฟังก์ชัน:
1. console.log("Hello "+name);:
  -ฟังก์ชันจะพิมพ์ข้อความ "Hello " ตามด้วยค่าของพารามิเตอร์ name
2. return name +" hello!";:
  -ฟังก์ชันจะส่งค่าผลลัพธ์เป็นสตริงที่ประกอบด้วยค่าของ name ตามด้วย " hello!"
  -ค่าผลลัพธ์นี้จะถูกส่งกลับจากฟังก์ชัน (return value)

 */

/*   2. การเข้าถึงชื่อฟังก์ชัน (Function Name Property)
 
  console.log(printHello.name);
  
  #printHello.name:
      -ใช้คุณสมบัติ name ของฟังก์ชัน printHello เพื่อดึงชื่อของฟังก์ชันที่เป็น string
      -name เป็นคุณสมบัติที่มีอยู่ในฟังก์ชันทุกตัวใน JavaScript และจะคืนค่าชื่อของฟังก์ชัน (ในที่นี้คือ "printHello")
  
      #ผลลัพธ์:printHello 
*/

/*   3. การเรียกใช้ฟังก์ชัน (Function Invocation)

let result = printHello("sirinya !");
console.log(result);

การเรียกใช้ฟังก์ชัน:
-ฟังก์ชัน printHello ถูกเรียกโดยส่งค่า "sirinya !" เข้าไปเป็นพารามิเตอร์ name
  -เมื่อฟังก์ชันทำงาน:
    1. console.log("Hello "+name); จะพิมพ์ "Hello sirinya !"
    2. return name +" hello!"; จะส่งค่าผลลัพธ์เป็น "sirinya ! hello!"
#การเก็บผลลัพธ์:
  -ค่าผลลัพธ์ที่ส่งกลับจากฟังก์ชัน ("sirinya ! hello!") ถูกเก็บในตัวแปร result
#การพิมพ์ผลลัพธ์:
  -console.log(result); จะพิมพ์ค่าของ result ซึ่งคือ "sirinya ! hello!" */



/*   ผลลัพธ์ทั้งหมดที่แสดงในคอนโซล:
   1.เมื่อเรียกใช้ printHello.name จะได้:
     
     printHello
   
   2.เมื่อเรียกใช้ฟังก์ชัน printHello("sirinya !") และพิมพ์ผลลัพธ์จาก result จะได้:

     Hello sirinya !
     sirinya ! hello!


**สรุป**
1.การประกาศฟังก์ชัน:
-ฟังก์ชัน printHello รับพารามิเตอร์ name และพิมพ์ข้อความ "Hello " ตามด้วยชื่อที่ส่งเข้าไป จากนั้นจะส่งค่าผลลัพธ์เป็น "name hello!"

2.การใช้ name ของฟังก์ชัน:
-คุณสมบัติ name คืนชื่อของฟังก์ชันเป็น string (printHello)

3.การเรียกใช้ฟังก์ชัน:
-เมื่อเรียกใช้ printHello("sirinya !"), ฟังก์ชันจะพิมพ์ "Hello sirinya !" และส่งค่าผลลัพธ์เป็น "sirinya ! hello!" */