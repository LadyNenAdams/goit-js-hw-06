
const lists = document.querySelectorAll(`ul#categories>li.item`);
console.log(`Number of categories: ${ lists.length }`);

const categories = [...lists];
for (let item of categories) {
    let category = item.firstElementChild.textContent;   
    let value = item.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${value}`);
};
