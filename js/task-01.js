const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(item => {
const categoriesTitle = item.querySelector('h2').textContent;
const categoriesElements = item.querySelectorAll('li').length;

console.log(categoriesTitle);
console.log(categoriesElements);
})