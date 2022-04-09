const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const modifiedIngredients = ingredients.reduce((acc, ingredient) => {
//  acc += '<li class="item">' + ingredient + '</li>';
//   return acc;
// }, "");
// console.log(modifiedIngredients);

const modifiedIngredients = ingredients.map( ingredient => {
const listItem = document.createElement('li');
listItem.innerHTML=ingredient;
listItem.className='item';
return listItem;
   
});

const myList = document.querySelector('#ingredients');
myList.append(...modifiedIngredients);





