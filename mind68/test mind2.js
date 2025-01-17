function highestDigit(num) {
    let digits = num.toString().split('').map(Number);
    console.log(Math.max(...digits));
}

highestDigit(379);
highestDigit(2);
highestDigit(377401);