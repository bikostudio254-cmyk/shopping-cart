const cookiesButton = document.querySelector('.cookies-button');

const cookiesMinusButton = document.querySelector('.cookies-minus');

const cookiesPlusButton = document.querySelector('.cookies-plus');

const cakesMinus = document.querySelector('.cakes-minus');

const cakesPlus = document.querySelector('.cakes-plus')

const cakesButton = document.querySelector('.cakes-button');

let totalPrice = 0;

const totalPriceElement = document.querySelector('.total-price');

const cartItemsElement = document.querySelector('.cart-items')

const clearCartButton = document.querySelector('.clear-cart-button')

const  cookies = {
    name: 'cookies',
    price: 100,
    quantity: 0
};

const cakes =  {
    name: 'cakes',
    price: 250,
    quantity: 0
};

cookiesButton.addEventListener('click', function() {
    cookies.quantity = cookies.quantity + 1;

    updateTotalPrice();

    updateCartDisplay();

});

cakesButton.addEventListener('click', function() {
    cakes.quantity = cakes.quantity + 1;

     updateTotalPrice();

    updateCartDisplay();

});

clearCartButton.addEventListener('click', function() {
   cookies.quantity = 0;
   cakes.quantity = 0;

   
   updateCartDisplay();
   updateTotalPrice();
});

function updateCartDisplay() {
    const items =[];

    if(cookies.quantity > 0 ) {
        items.push(`${cookies.name} × ${cookies.quantity}`)
    } if(cakes.quantity > 0) {
        items.push(`${cakes.name} × ${cakes.quantity}`);
    } 

    cartItemsElement.textContent = items.length > 0
    ? items.join(',')
    :'No items yet';
};


cookiesMinusButton.addEventListener('click', function() {
    if(cookies.quantity > 0 ) {
        cookies.quantity--;
    }

    updateTotalPrice();
    updateCartDisplay();
});

cookiesPlusButton.addEventListener('click', function() {
    cookies.quantity++;

    updateTotalPrice();
    updateCartDisplay();
});

function updateTotalPrice() {
    totalPrice = (cookies.price * cookies.quantity) +
                 (cakes.price * cakes.quantity);

    totalPriceElement.textContent = `Total: Ksh ${totalPrice}`;
};

cakesMinus.addEventListener('click', function(){
    if(cakes.quantity > 0) {
        cakes.quantity--;
    };
    updateTotalPrice();
    updateCartDisplay();

});

cakesPlus.addEventListener('click', function() {
    cakes.quantity++;

    updateTotalPrice();
    updateCartDisplay();
});
