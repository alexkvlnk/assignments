var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');
var appData = {
    budget: money,
    timeData: time,
};
var expenses = {};
var optionalExpenses = {};
var income = [];
var savings = false;
expenses[0] = prompt("Введите обязательную статью расходов в этом месяце");
expenses[1] = prompt("Во сколько это обойдётся?");
expenses[2] = prompt("Введите обязательную статью расходов в этом месяце");
expenses[3] = prompt("Во сколько это обойдётся?");
let result = (money - expenses[1] - expenses[3]) / 30;
alert(" Ваш бюджет на сегодня: " + result + " рублей.");