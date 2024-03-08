const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoopingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoMenu)


function toggleDesktopMenu(){
    const isAsideClosed = shoopingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
      shoopingCartContainer.classList.add('inactive')
    } 
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoopingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
      shoopingCartContainer.classList.add('inactive')
    } 

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoMenu(){
  const isMobileClosed = mobileMenu.classList.contains('inactive');
 


if(!isMobileClosed){
    mobileMenu.classList.add('inactive');
}

shoopingCartContainer.classList.toggle('inactive');

}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'PS5',
    price: 520,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pc gamer',
    price: 840,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(arr){
  for (product of arr){
   const productCard =   document.createElement('div');
    productCard.classList.add('product-card');

   const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image)

   const productInfo =   document.createElement('div');
    productInfo.classList.add('product-info');
      
      
      
   const productInfoDiv = document.createElement('div')

   const productPrice  = document.createElement('p')
    productPrice.innerText = '$' + product.price

   const productName  = document.createElement('p')
    productName.innerText = product.name
      
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
      
      
   const productInfoFigure =   document.createElement('figure');
   const productImgCart =   document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
      
    productInfoFigure.appendChild(productImgCart)
      
      
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
      
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
      
      
    cardsContainer.appendChild(productCard)
      }
}

renderProducts(productList)













/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/