function findNumber(){
    const value = 2/19;
    let firstNumber = value.toString().slice(2) + '2';
    checkNumber (firstNumber);
}

function checkNumber (arg){
    let result = arg.toString().slice(-1) + arg.toString().slice(0, -1);
    console.log("Сравнение чисел: удвоенное исходное ", Number(arg*2), "и ", "новое", 
                result, "=>", arg*2 == result);
    arg = result;
    checkNumber (arg);
}

findNumber();