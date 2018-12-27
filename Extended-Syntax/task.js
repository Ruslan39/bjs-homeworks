

function CalculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = GetResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function GetResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
}

function CalculateDrinkTask(){
    let name = window.name.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = AskDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function AskDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function CalculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = GetAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function GetAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}