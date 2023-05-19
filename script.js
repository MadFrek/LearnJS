"use strict";
let money = 20000;  // Месячный бюджет
let profit = '5000';  // Фриланс
let expenses = 'Питание: 4000, Проезд: 2000, По-приколу: 500';  // Расходы
let purpose = 40000;  // Цель зарабоать
let period = 3;  // Период?
let budgetDay = money / 30;  // Дневной доход
console.log(typeof(money));
console.log(typeof(profit));
console.log(expenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${purpose} хуёллеров`);
console.log(Math.round(budgetDay));
expenses = expenses.toLowerCase();  // Приведение к нижниму регистру
expenses = expenses.split(" ");
console.log(expenses);
var a = '';
for (let i = 0; i < expenses.length; i++) {
    if (i % 2 == 0 ) {
        a += expenses[i];
    }
}
console.log(a);