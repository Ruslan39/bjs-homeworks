"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let x, x1, x2;

    if (d < 0) {
        x = null;
    } else if (d == 0) {
        x = ( -b + Math.sqrt(d) ) / (2 * a);
    } else {
        x1 = ( -b + Math.sqrt(d) ) / (2 * a);
        x2 = ( -b - Math.sqrt(d) ) / (2 * a);
        x = [x1, x2];
    }

    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){    
    let currentDate = new Date();
    let result = ( currentDate - dateOfBirthday ) / ( 1000 * 60 * 60 * 24 * 365.25 );

    if (result >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
    } else {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    }

    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let marksLength = marks.length;
    let marksSum = 0;
    let averageMark = 0;
    
    if (marksLength > 5) {
        console.log(`Количество оценок ${marksLength}. В расчете средней оценки используются первые 5 значений.`);
        
        let marksOf5 = marks.slice(0, 5);
        for (let i = 0; i < 5; i++) {
            marksSum += marksOf5[i];
        }
        averageMark = marksSum / 5;

    } else {
        for (let i = 0; i < marksLength; i++) {
            marksSum += marks[i];
        }
        averageMark = marksSum / marksLength;
    }

    return averageMark;
}