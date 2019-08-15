var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');
var appData = {
    budget: money;
    timeData: time;
};
var expenses = {};
var optionalExpenses = {};
var income = [];
var savings = false;
