const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector(`#ingredients`);

const listEl = ingredients.map((ingredient) => {
 
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');

   return liEl; 
   
});
ulEl.append(...listEl);
 
console.dir(ulEl);
     
  
  


