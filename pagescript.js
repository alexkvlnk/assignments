let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце'),
          b = prompt('Во сколько это обойдётся?');

      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
      && a != ' ' && b != ' ' && a.length < 50) {
          console.log('done');
          appData.expenses[a] = b;
      } else {
          console.log('bad result')
          i = i - 1;
      }
    }
}
chooseExpenses();

//Цикл while
//let i=0;
//while(i < 2) {
//    let a = +prompt('Введите обязательную статью расходов в этом месяце'),
//        b = prompt('Во сколько это обойдётся?');
//
//    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//    && a != ' ' && b != ' ' && a.length < 50) {
//        console.log('done');
//        appData.expenses[a] = b;
//    } else {
//        console.log('bad result')
//        i--;
//    }
//};

//Цикл do...while
//let i = 0;
//do {
//    let a = +prompt('Введите обязательную статью расходов в этом месяце'),
//        b = prompt('Во сколько это обойдётся?');
//
//    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//    && a != ' ' && b != ' ' && a.length < 50) {
//        console.log('done');
//        appData.expenses[a] = b;
//    } else {
//        console.log('bad result')
//        i--;
//    }
//    i++;
//}
//while (i < 2);

appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert('Ваш бюджет на сегодня: ' + appData.moneyPerDay + ' руб.');

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка')
} else {
    console.log('Произошла ошибка')
};

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений? '),
            percent = +prompt('Под какой процент? ')
        
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();