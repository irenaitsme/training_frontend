


/*************************************/

const start = new Date(null);
let age, years, months, days = new Date;

function calc_age (date){
    value = Date.parse(date);
    age = new Date(Date.now() - value);
    years =  age.getFullYear() - start.getFullYear();
    months = age.getMonth() + years * 12;
    days = ((Date.now() - value) / 86400000).toFixed(0);
    console.log("Дата рождения: ", date);
    console.log("Количество полных лет с рождения: ", years);
    console.log("Количество полных месяцев с рождения: ", months);
    console.log("Количество полных дней с рождения: ", days);    
}

calc_age("Januar 1, 1992");