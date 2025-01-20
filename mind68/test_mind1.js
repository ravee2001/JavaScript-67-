function numberSpliit(numberSpliit) {
    const mind = (numberSpliit,b) => Math.floor(numberSpliit / b);
    const mind1 = (numberSpliit,b) => Math.ceil (numberSpliit / b);


    let arry01 = []
        arry01.push(mind(numberSpliit,2))
        arry01.push(mind1(numberSpliit,2))
        return arry01;

};


console.log(numberSpliit(4));
console.log(numberSpliit(10));
console.log(numberSpliit(11));
console.log(numberSpliit(-9));