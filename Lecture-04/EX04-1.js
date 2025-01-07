const library = {
    books: [],
  
    // เพิ่มหนังสือใหม่เข้าไปในคลัง
    addBook: function (book) {
      this.books.push(book);
      console.log(`เพิ่มหนังสือ "${book.title}" เข้าสู่คลังเรียบร้อยแล้ว`);
    },
  
    // ลบหนังสือตามชื่อ
    removeBook: function (title) {
        // วนลูปจากท้ายอาร์เรย์ไปข้างหน้า
        for (let i = this.books.length - 1; i >= 0; i--) {
          if (this.books[i].title === title) {
            this.books.pop(); // ลบตัวสุดท้ายออก
            console.log(`ลบหนังสือ "${title}" ออกจากคลังเรียบร้อยแล้ว`);
            return; // ลบแค่เล่มเดียว
          } else {
            // นำตัวสุดท้ายที่ไม่ตรงกันออก แล้วเพิ่มกลับเข้าไปด้านหน้าของอาร์เรย์
            this.books.unshift(this.books.pop());
          }
        }
        console.log(`ไม่พบหนังสือชื่อ "${title}" ในคลัง`);
      }
      
    
    // แสดงรายชื่อหนังสือทั้งหมดในคลัง
    listBooks: function () {
      if (this.books.length === 0) {
        console.log("คลังว่าง ไม่มีหนังสือในระบบ");
        return;
      }
      console.log("รายชื่อหนังสือในคลัง:");
      this.books.forEach((book, index) => {
        const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
        console.log(`${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`);
      });
    },
  
    // ส่งคืนรายชื่อหนังสือที่ยังไม่ได้อ่าน
    getUnreadBooks: function () {
      const unreadBooks = this.books.filter(book => !book.isRead);
      return unreadBooks;
    }
  };
  
  // ตัวอย่างการใช้งาน
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
  