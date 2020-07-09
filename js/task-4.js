const credits = 23580;
const pricePerDroid = 3000;
const quantityOfDroid = prompt("введите количество единиц товара");
let totalPrice;
let message;
let balance;
if (credits >= pricePerDroid * quantityOfDroid && quantityOfDroid > 0) {
  balance = credits - pricePerDroid * quantityOfDroid;
  message = ` Вы купили ${quantityOfDroid} дроидов, на счету осталось ${balance} кредитов;`;
} else if (quantityOfDroid === null) {
  message = "Отменено пользователем!";
} else {
  message = "Недостаточно средств на счету!";
}
console.log(message);
