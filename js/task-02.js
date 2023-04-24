const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(el => {
  const ingridientItemEl = document.createElement('li');
  ingridientItemEl.classList.add('item');
  ingridientItemEl.textContent = el;

  return ingridientItemEl
});
console.log(elements);

const ul = document.querySelector('ul');
ul.append(...elements)
console.log(ul)

