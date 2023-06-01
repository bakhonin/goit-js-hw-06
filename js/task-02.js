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
  const itemElement = document.createElement('li');
  itemElement.textContent = ingredient;
  itemElement.classList.add('item');
  return itemElement;
})

ingredientsList.append(...itemList);
