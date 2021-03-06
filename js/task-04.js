// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
//или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

const onIncreaseByOne = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const onReduceByOne = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener("click", onIncreaseByOne);
btnIncrementRef.addEventListener("click", onReduceByOne);

// let counterValue = 0;
// btnDecrementRef.addEventListener("click", (counterValue, valueRef) => {
//   console.log((counterValue += 1));
// });
// console.log((valueRef.textContent += 1));
