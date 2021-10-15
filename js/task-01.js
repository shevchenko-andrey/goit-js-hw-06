// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий
//  в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст
//заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него
//< li >).
const categoriesRef = document.querySelector("#categories");
console.log("categoriesRef", categoriesRef);
const categoriesItemRef = categoriesRef.children;
console.log("categoriesItemRef", categoriesItemRef);

const countingCategories = (itemsArray) => {
  console.log(`Number of categories: ${itemsArray.length}`);
  [...itemsArray].forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}
   Elements: ${item.lastElementChild.children.length}`);
  });
};

countingCategories(categoriesItemRef);
