const start = new Date(null);
let age, years, months, days = new Date;

function calc_age (date){
    value = Date.parse(date);
    age = new Date(Date.now() - value);
    years =  age.getFullYear() - start.getFullYear();
    months = age.getMonth() + years * 12;
    days = ((Date.now() - value) / 86400000).toFixed(0);
    console.log("Дата рождения: ", date);
    console.log("Всего лет/месяцев/дней:", years, "/", age.getMonth(), "/", age.getDate()-1);
    console.log("Дата в годах: ", years);
    console.log("Дата в  месяцах: ", months);
    console.log("Дата в днях: ", days);    
}

calc_age("Januar 1, 1992");