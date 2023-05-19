money = 20000;  // Месячный бюджет
profit = '5000';  // Фриланс
expenses = 'Питание: 4000, Проезд: 2000, По приколу: 500';  // Расходы
purpose = 40000;  // Цель зарабоать
period = 3;  // Период?
budgetDay = money / 30;  // Дневной доход
console.log(typeof(money));
console.log(typeof(profit));
console.log(expenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${purpose} хуёллеров`);
console.log(Math.round(budgetDay));
expenses = expenses.toLowerCase();  // Приведение к нижниму регистру
for (const symbol of expenses) {
    console.log(symbol);
}