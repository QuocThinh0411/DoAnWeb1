
const decrementBtn = document.querySelectorAll('#decrement');
const quantityProduct = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceProduct = document.querySelectorAll('#priceProduct');
const subtotal = document.querySelector('#subtotal');
const discount = document.querySelector('#discount');
const total = document.querySelector('#total');
const shipping = document.querySelector('#shipping');
const giamgia = document.querySelector('#giamgia');


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


function totalCalc() {

  let subtotalValue = 0;
  let totalValue = 0;
  let discountValue = 0;

  for (let i = 0; i < quantityProduct.length; i++) {

    subtotalValue += Number(quantityProduct[i].textContent) * Number(priceProduct[i].textContent);
  }
  subtotal.textContent = subtotalValue;

let a = document.getElementById("giamgia");
discountValue = a.value;
discount.textContent = discountValue;


  totalValue = subtotalValue - discountValue + Number(shipping.textContent);

  total.textContent = totalValue.toFixed() + " VND";
}

document.getElementById("click").onclick = function(){
  totalCalc();
}
function kiemtra(){
  var n = document.formtt.n.value;
  var p = document.formtt.p.value;
  if (n=="") {
    document.getElementById("loi").innerHTML="Vui lòng điền thông tin họ và tên!";
    return false;
}
if (p=="") {
    document.getElementById("loi").innerHTML="Vui lòng điền thông tin số điện thoại!";
    return false;
}
document.getElementById("loi").innerHTML="";
window.location="order_list.html"
return true;

}
document.getElementById("payment").onclick = function(){
  kiemtra();
}
