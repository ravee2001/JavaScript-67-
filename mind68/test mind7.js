function sumTwoSmallestNums(params) {
    params.forEach(element => {
        if (element < 0) {
            const index = params.indexOf(element);
            params.splice(index, 1);
        }
    });
    params.sort((a, b) => a - b);  
    console.log(params[0] + params[1]);
}

sumTwoSmallestNums([19, 5, 42, 2, 77]);
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);
sumTwoSmallestNums([2, 9, 6, -1]);
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, -791, -587]);
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]);

/*
output:
7
3453455
8
-1310
4519
*/