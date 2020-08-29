const selectQty = document.querySelector('.right-col_first-area .details_select');
const addToCart = document.querySelector('.right-col_first-area_5 .yellow-button');
const numInCart = document.querySelector('.top-navbar-right_cart .num-of-items');

let qtyToAdd = parseInt(selectQty.value);

function handleSelectChange(e) {
  qtyToAdd = parseInt(e.currentTarget.value);
}

function handleAddToCart() {
  let calcNumInCart = parseInt(numInCart.textContent);
  calcNumInCart = calcNumInCart + qtyToAdd;
  numInCart.textContent = calcNumInCart;
  if(parseInt(numInCart.textContent) > 9) {
    numInCart.style.left = `${15}px`;
  }
}

selectQty.addEventListener('change', handleSelectChange);
addToCart.addEventListener('click',handleAddToCart);


