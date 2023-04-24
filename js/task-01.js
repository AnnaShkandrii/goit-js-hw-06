
const categoriesList = document.getElementById('categories');

const newArray = categories.children;

console.log(`Number of categories : ${newArray.length}.`);

const titlesList = categoriesList.querySelectorAll('.item');
console.log('titlesList', titlesList);

titlesList.forEach(item => {
  const elementName = item.querySelector('h2').textContent;
  const elementCount = item.querySelectorAll('li').length;
  console.log(`Category : ${elementName}`);
  console.log(`Elements ; ${elementCount}`);
});

