const categoriesEl = document.getElementById("categories"); 
console.log(`Number of categories: ${categoriesEl.children.length}`);

 
[...categoriesEl.children].forEach( (item) => {

    const title = item.querySelector("h2");
    const itemsEl = item.querySelectorAll('.item li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${itemsEl.length}`) 
}); 




 