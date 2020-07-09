const adminPassword = "jqueryismyjam";
let message;
const userPassword = prompt("Введите пароль");

if (userPassword === adminPassword) {
  message = "Добро пожаловать!";
} else if (userPassword === null) {
  message = "отменено пользователем";
} else {
  message = "Доступ запрещён, неверный пароль!";
}

alert(message);
