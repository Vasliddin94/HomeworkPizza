function addChanges() {
  let cardBody=document.querySelector('.card-body');
  cardBody.style.display='none';
  let mycart=document.querySelector('.mycart');
  mycart.style.display='block';
  let eventualList=document.querySelector('.list-items');
  eventualList.style.display='block';
  let address=document.querySelector('.payment');
  address.style.display='none';
  let background=document.querySelector('.background');
  background.style.display='none'

};

function back(){
  let cardBody=document.querySelector('.card-body');
  cardBody.style.display='block';
  let mycart=document.querySelector('.mycart');
  mycart.style.display='none'

}

$('#proceed').prop('disabled', true)

var number=document.querySelector('#num');
let totalPrice=document.getElementById('total-price');



function add(){
  let bought1=document.querySelector('.list-items .item1');
  bought1.style.display='block';
  let plusMinus=document.querySelector('.list-items .item1 .plus-minus');
  plusMinus.style.display='flex';
  number.value++;
  let addChecked=document.querySelector('.add1');
  addChecked.innerHTML='&#10003';
  addChecked.disabled=true;
  let quantity=document.querySelector('.list-items .item1 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let key=document.querySelector('#proceed');
  key.disabled=false;
  totalPrice.value=number.value*(10.99);
}

function add2(){
  let bought1=document.querySelector('.list-items .item2');
  bought1.style.display='block';
  let plusMinus=document.querySelector('.list-items .item2 .plus-minus');
  plusMinus.style.display='flex';
  number.value++;
  let addChecked=document.querySelector('.add2');
  addChecked.innerHTML='&#10003';
  addChecked.disabled=true;
  let quantity=document.querySelector('.list-items .item2 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let key=document.querySelector('#proceed');
  key.disabled=false;
  totalPrice.value=number.value*(10.99);
}

function add3(){
  let bought1=document.querySelector('.list-items .item3');
  bought1.style.display='block';
  let plusMinus=document.querySelector('.list-items .item3 .plus-minus');
  plusMinus.style.display='flex';
  number.value++;
  let addChecked=document.querySelector('.add3');
  addChecked.innerHTML='&#10003';
  addChecked.disabled=true;
  let quantity=document.querySelector('.list-items .item3 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let key=document.querySelector('#proceed');
  key.disabled=false;
  totalPrice.value=number.value*(10.99);
}




function add4(){
  let bought1=document.querySelector('.list-items .item4');
  bought1.style.display='block';
  let plusMinus=document.querySelector('.list-items .item2 .plus-minus');
  plusMinus.style.display='flex';
  number.value++;
  let addChecked=document.querySelector('.add4');
  addChecked.innerHTML='&#10003';
  addChecked.disabled=true;
  let quantity=document.querySelector('.list-items .item4 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let key=document.querySelector('#proceed');
  key.disabled=false;
  totalPrice.value=number.value*(10.99);
}

function add5(){
  let bought1=document.querySelector('.list-items .item5');
  bought1.style.display='block';
  let plusMinus=document.querySelector('.list-items .item5 .plus-minus');
  plusMinus.style.display='flex';
  number.value++;
  let addChecked=document.querySelector('.add5');
  addChecked.innerHTML='&#10003';
  addChecked.disabled=true;
  let quantity=document.querySelector('.list-items .item5 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let key=document.querySelector('#proceed');
  key.disabled=false;
  totalPrice.value=number.value*(10.99);
}

function add6(){
  let bought1=document.querySelector('.list-items .item6');
  bought1.style.display='block';
  let plusMinus=document.querySelector('.list-items .item6 .plus-minus');
  plusMinus.style.display='flex';
  number.value++;
  let addChecked=document.querySelector('.add6');
  addChecked.innerHTML='&#10003';
  addChecked.disabled=true;
  let quantity=document.querySelector('.list-items .item6 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let key=document.querySelector('#proceed');
  key.disabled=false;
  totalPrice.value=number.value*(10.99);
}

function plus1(){
  var price1=document.querySelector('.list-items .item1 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item1 #quantity');
  quantity.value++;
  price1.value=quantity.value*(10.99);
  totalPrice.value=number.value*(10.99);
}

function minus1() {
  var price1=document.querySelector('.list-items .item1 .price')
  if (number.value>=1) {
    number.value--;

  }
  if (number.value==0) {
    $('#proceed').prop('disabled', true);
  }

  else if(number.value===0){
    $('#proceed').prop('disabled', true);
  }
  let quantity=document.querySelector('.list-items .item1 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item1=document.querySelector('.list-items.list-items .item1');
    item1.style.display='none';
    let addChecked=document.querySelector('.add1');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price1.value=quantity.value*10.99;
  totalPrice.value=number.value*(10.99);
}

function plus2(){
  var price2=document.querySelector('.list-items .item2 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item2 #quantity');
  quantity.value++;
  price2.value=quantity.value*(10.99);
  totalPrice.value=number.value*(10.99);
}

function minus2() {
  var price2=document.querySelector('.list-items .item2 .price')
  if (number.value>=1) {
    number.value--;
  }

  if (number.value==0) {
    $('#proceed').prop('disabled', true);
  }



  let quantity=document.querySelector('.list-items .item2 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item2=document.querySelector('.list-items.list-items .item2');
    item2.style.display='none';
    let addChecked=document.querySelector('.add2');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price2.value=quantity.value*10.99;
  totalPrice.value=number.value*(10.99);
}



function plus3(){
  var price3=document.querySelector('.list-items .item3 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item3 #quantity');
  quantity.value++;
  price3.value=quantity.value*(10.99);
  totalPrice.value=number.value*(10.99);
}

function minus3() {
  var price3=document.querySelector('.list-items .item3 .price')
  if (number.value>=1) {
    number.value--;
  }
  if (number.value==0) {
    $('#proceed').prop('disabled', true);
  }
  let quantity=document.querySelector('.list-items .item3 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item3=document.querySelector('.list-items.list-items .item3');
    item3.style.display='none';
    let addChecked=document.querySelector('.add3');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price3.value=quantity.value*10.99;
  totalPrice.value=number.value*(10.99);
}

function plus4(){
  var price4=document.querySelector('.list-items .item4 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item4 #quantity');
  quantity.value++;
  price4.value=quantity.value*(10.99);
  totalPrice.value=number.value*(10.99);
}

function minus4() {
  var price4=document.querySelector('.list-items .item4 .price')
  if (number.value>=1) {
    number.value--;
  }
  if (number.value==0) {
    $('#proceed').prop('disabled', true);
  }
  let quantity=document.querySelector('.list-items .item4 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item4=document.querySelector('.list-items.list-items .item4');
    item4.style.display='none';
    let addChecked=document.querySelector('.add4');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price4.value=quantity.value*10.99;
  totalPrice.value=number.value*(10.99);
}

function plus5(){
  var price5=document.querySelector('.list-items .item5 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item5 #quantity');
  quantity.value++;
  price5.value=quantity.value*(10.99);
  totalPrice.value=number.value*(10.99);
}

function minus5() {
  var price5=document.querySelector('.list-items .item5 .price')
  if (number.value>=1) {
    number.value--;
  }
  if (number.value==0) {
    $('#proceed').prop('disabled', true);
  }
  let quantity=document.querySelector('.list-items .item5 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item5=document.querySelector('.list-items.list-items .item5');
    item5.style.display='none';
    let addChecked=document.querySelector('.add5');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price5.value=quantity.value*10.99;
  totalPrice.value=number.value*(10.99);
}

function plus6(){
  var price6=document.querySelector('.list-items .item6 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item6 #quantity');
  quantity.value++;
  price6.value=quantity.value*(10.99);
  totalPrice.value=number.value*(10.99);
}

function minus6() {
  var price6=document.querySelector('.list-items .item6 .price')
  if (number.value>=1) {
    number.value--;
  }
  if (number.value==0) {
    $('#proceed').prop('disabled', true);
  }
  let quantity=document.querySelector('.list-items .item6 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item6=document.querySelector('.list-items.list-items .item6');
    item6.style.display='none';
    let addChecked=document.querySelector('.add6');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price6.value=quantity.value*10.99;
  totalPrice.value=number.value*(10.99);
}



function payment() {
    let cart=document.querySelector('.list-items');
    cart.style.display='none';
    let address=document.querySelector('.payment');
    address.style.display='block';
}

$('.deliver2').prop('disabled',true)

$('.address1').keyup(function() {
  if($(this).val().length>=5){
    $('.deliver2').prop('disabled',false)
  }
  if($(this).val().length==1){
    $('.deliver2').prop('disabled',true)
  }
})

function finalPage(){
  let address1=document.querySelector('.address1').value;
  let header1=document.querySelector('.header1');
  if (address1.length>5 && $('.address2').val().length>5) {
    let a=prompt('Please enter promo code:');
    if(a.toLowerCase().split(' ').join('')==='vasliddin'){
      alert('Congratulations you have succesfully activated your prome code!!! You are paying $0 now')
      let final=document.querySelector('.onTheWay');
      $('#promo').text($('#total-price').val())
    final.style.display='block';
    let address=document.querySelector('.payment');
    address.style.display='none';
    let lastCard=document.querySelector('.last-card');
    lastCard.style.display='block';
    header1.style.display='none';
    }
    else {
      alert('Please check your promo and try again')
    }
  }
  else {
    alert('Please make sure to enter your address in a right format')
  }

}






function background() {
  setTimeout(function(){
    let back=document.querySelector('.background');
    back.style.display='none'
  }, 700)
}




// scroll reveal

ScrollReveal().reveal('#main-menu', {
  duration:2000,
  origin:'bottom',
  distance:'100px',
  scale:0.8
})
