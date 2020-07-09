const deliveryPlace = prompt("Введите страну доставки");
const normalizedDeliveryPlace = deliveryPlace.toLowerCase();
let deliveryPrice;

switch (normalizedDeliveryPlace) {
  case "китай":
    deliveryPrice = 100;
    break;

  case "чили":
    deliveryPrice = 250;
    break;

  case "австралия":
    deliveryPrice = 170;
    break;

  case "индия":
    deliveryPrice = 80;
    break;

  case "ямайка":
    deliveryPrice - 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
const message = `Доставка в ${deliveryPlace} будет стоить ${deliveryPrice} кредитов`;
console.log(message);
