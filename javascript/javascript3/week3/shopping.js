class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    async convertToCurrency (currency) {
        const response = await fetch('https://api.exchangeratesapi.io/latest');
        const data = await response.json();
                const rateUSD = data.rates.USD * this.price;
                const rateTHB = data.rates.THB * this.price;
                const rateDKK = data.rates.DKK * this.price;
                
                if (currency == "dollar" || currency == "USD" || currency == "usd"){
                    console.log (`USD: ${rateUSD.toFixed(2)}`);
                } else if (currency == "baht" || currency == "THB"){
                   console.log(`THB: ${rateTHB.toFixed(2)}`);
                } else if (currency == "kroner" || currency == "DKK"){
                   console.log(`DKK: ${rateDKK.toFixed(2)}`);
                } else {
                   console.log('Your currency is not in the list!');
                }
    }
  }
  
class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
        this.products.push(product);
        console.log(`${product.name} is added in the list.`);
    }
  
    removeProduct(product) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i] === product) {
              this.products.splice(i, 1);
              console.log(`${product.name} is removed.`);
              
            }
        }
    }
  
    searchProduct(productName) {
        let searchedProduct = [];
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === productName) {
               searchedProduct.push(this.products[i]);
               console.log(`${productName} is found.`);
            } 
        /* this.products.filter(product => {
         product.name === productName; */
             
            
        }
    }
  
    getTotal() {
        const totalPrice = this.products.reduce((total, product) => {
            return total + product.price;
          }, 0);
          const totalP = document.getElementById('total');
             totalP.innerHTML = `Total: ${totalPrice}`;
    }
  
    renderProducts() {
        const cartDiv = document.getElementById('cart');
        const mainUl = document.createElement('ol');
        cartDiv.appendChild(mainUl);
            this.products.forEach(product => {
                const mainLi = document.createElement('li');
                mainLi.innerHTML = `Item: ${product.name.charAt(0).toUpperCase() + product.name.slice(1)} <br> Price: ${product.price}`;
                mainUl.appendChild(mainLi);
            })
    }
  
    getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * (10 - 1 + 1) + 1)}`)
        .then(response => response.json())
        .then(data => {
            const user = document.getElementById('user');
                 user.innerHTML = `Customer: ${data.name}`;
        });    
    }
}
  
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const computer = new Product("computer", 4000);
const phone = new Product("phone", 3000);
const phone2 = new Product("phone", 4000);
const radio = new Product("radio", 1000);
const plant = new Product("plant", 100);

plant.convertToCurrency("kroner"); //743.87
plant.convertToCurrency("dollar"); //122.71
plant.convertToCurrency("baht"); //3677.60
plant.convertToCurrency("kyat"); //Your currency is not in the list.

shoppingCart.addProduct(plant);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(computer);
shoppingCart.addProduct(phone);
shoppingCart.addProduct(phone2);
shoppingCart.addProduct(radio);

shoppingCart.removeProduct(computer); //coputer is removed.
shoppingCart.removeProduct(radio); //radio is removed.

shoppingCart.getUser();
shoppingCart.renderProducts();
shoppingCart.getTotal()
shoppingCart.searchProduct('phone'); //2 phone is found
shoppingCart.searchProduct('car'); //no log



