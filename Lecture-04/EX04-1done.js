const library = {
    books: [],

    addBook: function (book) {
        const isBookInLibrary = this.books.some(existingBook => existingBook.title === book.title);
    if (isBookInLibrary) {
        console.log(`หนังสือ "${book.title}" มีอยู่ในคลังแล้ว`);
        return; //หยุดการทำงานถ้าพบว่าหนังสือที่ซ้ำกัน
    }
        this.books.push(book);
        console.log(`เพิ่มหนังสือ "${book.title}" เข้าสู่คลังแล้ว`);
    },

    removeBook: function (title) {
        const index = this.books.findIndex(book => book.title === title);
         if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`ลบหนังสือ "${title}" ออกจากคลังเรียบร้อยแล้ว`);
        } else {
            console.log(`ไม่พบหนังสือชื่อ "${title}" ข้างในคลัง`);
         }
    },

    listBooks: function () {
        //ตรวจสอบว่าอาร์เรย์หนังสือว่างไหม
        if (this.books.length === 0) {
            console.log("คลังว่าง ไม่มีหนังสือในระบบ");
        return; //ถ้าไม่มีหนังสือให้หยุดการทำงาน
        
        }
            //ถ้ามีหนังสือให้แสดงรายชื่อหนังสือ
            console.log("รายชื่อหนังสือในคลัง:");
  
            //ใช้forEachเพื่อวนลูปแสดงข้อมูลหนังสือทุกเล่ม
            this.books.forEach(function (book, index) {
        
            //ตรวจสอบสถานะการอ่านของหนังสือ
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            //แสดงข้อมูลหนังสือในรูปแบบที่เข้าใจง่าย
            console.log(`${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`);
        });
    },

    getUnreadBooks: function () {
        const unreadBooks = this.books.filter(book => !book.isRead);
        return unreadBooks;
  
    }
};


library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

library.removeBook("1984");
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/


module.exports = library;