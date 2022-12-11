
const decrementBtn = document.querySelectorAll('#decrement');
const quantityProduct = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceProduct = document.querySelectorAll('#price');
const subtotal = document.querySelector('#subtotal');
const discount = document.querySelector('#discount');
const total = document.querySelector('#total');
const shipping = document.querySelector('#shipping');



for (let i = 0; i < incrementBtn.length; i++) {

  incrementBtn[i].addEventListener('click', function () {
    let increment = Number(this.previousElementSibling.textContent);
    increment++;
    this.previousElementSibling.textContent = increment;
    totalCalc();

  });


  decrementBtn[i].addEventListener('click', function () {
    let decrement = Number(this.nextElementSibling.textContent);
    decrement <= 1 ? 1 : decrement--;
    this.nextElementSibling.textContent = decrement;
    totalCalc();

  });

}


const totalCalc = function () {

  let subtotal = 0;
  let total = 0;

  for (let i = 0; i < quantityProduct.length; i++) {

    subtotal += Number(quantityProduct[i].textContent) * Number(priceProduct[i].textContent);

  }

  subtotal.textContent = subtotal.toFixed();

  total = subtotal + discount + shipping;

  total.textContent = total.toFixed();
}