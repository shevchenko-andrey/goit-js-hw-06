// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением
// о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения
// полей в обьект, где имя поля будет именем свойства, а
// значение поля - значением свойства.Для доступа к элементам формы
// используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы
// методом reset.
const loginFormRef = document.querySelector(".login-form");

const formProcessing = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    const formValue = new Object();
    formValue.email = email.value;
    formValue.password = password.value;
    console.log(formValue);
    event.currentTarget.reset();
  }
};

loginFormRef.addEventListener("submit", formProcessing);

// const loginFormRef = document.querySelector(".login-form");
// const formProcessing = (event) => {
//   event.preventDefault();
//   const formProcessingData = new FormData(event.currentTarget);
//   console.dir(formProcessingData);
//   const formValue = new Object();
//   formProcessingData.forEach((value, name) => {
//     if (value !== "") {
//       formValue[name] = value;
//     }
//   });
//   console.log(formValue);
// };
// loginFormRef.addEventListener("submit", formProcessing);
