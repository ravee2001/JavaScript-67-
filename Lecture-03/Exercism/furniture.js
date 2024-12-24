// for (let char of "test") {
//     console.log(char);
// }

let furniture = ['Table','Chairs','Couch'];

// let iterator1 = str1[Symbol.iterator]();
// let iterator2 = str2[Symbol.iterator]();
// let iterator3 = str3[Symbol.iterator]();

// while (true) {
//     let result = furniture.next();
//     if (result.done) break;
//     console.log(result.value); 
// }
//     console.log(' ');
// while (true) {
//     let result = furniture.next();
//     if (result.done) break;
//     console.log(result.value); 
// }
//     console.log(' ');
// while (true) {
//     let result = furniture.next();
//     if (result.done) break;
//     console.log(result.value); 
// }


for (let n = 0; n < furniture.length; n++) {
  for (let m = 0; m < furniture[n].length; m++) {
    console.log(furniture[n][m]);
    
  }
  console.log('\n');
    
}