function menu (arg) {
    countItems = {};
    for (let item of arg) {countItems[item] = countItems[item] ? countItems[item] + 1 : 1; }
    return ("Заказ: ", countItems);
}

let order = ["Суп", "Кофе", "Картошка", "Кофе", "Стейк", "Суп", "Картошка"]
menu (order);

function search (str) {
    let arr = str.toLowerCase().replaceAll(' ', '').split('');
    countItems = {};
    for (let item of arr) {countItems[item] = countItems[item] ? countItems[item] + 1 : 1; }
    let itemValues = Object.values(countItems);
    let result = Math.max.apply(null, itemValues);
    return (Object.keys(countItems).find(k => countItems[k] === result))
}

let newStr = "А роза упала на лапу Азора";
console.log("Самая частовстречающаяся буква - ", search(newStr));


function checkNumber (arg){
    let result = arg.toString().slice(-1);

}

let firstNumber = 12;
function findNumber(){
    for (let i = 1; i < 18; i++){
        number = findNumber.toString().slice(-i) * 2;

    console.log (findNumber);
    findNumber();
    }
}
findNumber();

setInterval(function() {
	console.log('Привет');
}, 1000);

function text (num){
    return (setInterval(() => {
        console.log('Привет, Вася-изверг!')
      }, num))
}

result = text (2000);

setTimeout(() => {
    clearInterval(result)
    console.log('Сработал clearInterval')
  }, 15000)
  

