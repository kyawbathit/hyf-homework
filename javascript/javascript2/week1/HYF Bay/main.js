console.log("Script loaded");
const products = getAvailableProducts();
console.log(products);

const productUl = document.querySelector('ul');

    function renderProducts (products) {
        products.forEach(function (product) {
        const productLi = document.createElement('li');
        productUl.appendChild(productLi);
            productLi.innerText = product.name;
        const itemUl = document.createElement('ul');
        itemUl.setAttribute('class', 'item-ul')
            productLi.appendChild(itemUl);
            const keys = Object.keys(product);
            for (let i = 2; i < keys.length; i++) { 
                const itemLi = document.createElement('li');
                itemUl.appendChild(itemLi);
            itemLi.innerHTML = keys[i] + ' : ' +product[keys[i]];
            }
        })
};

renderProducts(products);
