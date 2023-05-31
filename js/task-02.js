const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const itemList = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
})

ingredientsList.append(...itemList);
