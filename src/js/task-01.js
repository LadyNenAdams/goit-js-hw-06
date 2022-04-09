const lists = document.querySelectorAll('.item');
console.log('Number of categories: '+lists.length);

lists.forEach(item => {
    console.log('Category: ' + item.querySelector('h2').innerText)
    console.log('Elements: ' + item.querySelectorAll('li').length)

})


