function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн
// стиль при клике на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.
const bodyRef = document.body;
const changeColorBtnRef = document.querySelector("button.change-color");
const colorRef = document.querySelector(".color");
colorRef.textContent = "#ffffff";
const onChangeColor = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor();
};

changeColorBtnRef.addEventListener("click", onChangeColor);
