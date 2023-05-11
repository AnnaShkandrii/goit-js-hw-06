
const categoriesList = document.getElementById('categories');

const newArray = categories.children;

console.log(`Number of categories : ${newArray.length}.`);

const titlesList = categoriesList.querySelectorAll('.item');
console.log('titlesList', titlesList);

titlesList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
