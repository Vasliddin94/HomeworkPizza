function addChanges() {
  let cardBody=document.querySelector('.card-body');
  cardBody.style.display='none';
  let mycart=document.querySelector('.mycart');
  mycart.style.display='block';
  let eventualList=document.querySelector('.list-items');
  eventualList.style.display='block';


};

function back(){
  let cardBody=document.querySelector('.card-body');
  cardBody.style.display='block';
  let mycart=document.querySelector('.mycart');
  mycart.style.display='none'
}


let number=document.querySelector('#num');
let totalPrice=document.querySelector('.total-price');

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
  let price=document.querySelector('.item1 .price');
  totalPrice.value=+price.value;
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
  let price=document.querySelector('.item2 .price');
  totalPrice.value=+price.value;
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
}

var price1=document.querySelector('.list-items .item1 .price')
function plus1(){
  var price1=document.querySelector('.list-items .item1 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item1 #quantity');
  quantity.value++;
  price1.value=quantity.value*(11.50);
}

function minus1() {
  if (number.value>=1) {
    number.value--;
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
    price1.value===0;
  }
  price1.value=-(11.50);
}



var price2=document.querySelector('.list-items .item2 .price')
function plus2(){
  number.value++;
  let quantity=document.querySelector('.list-items .item2 #quantity');
  quantity.value++;
  price2.value=quantity.value*(10.99);
}

function minus2() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.list-items .item2 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item2=document.querySelector('.list-items.list-items .item2');
    item2.style.display='none'
    let addChecked=document.querySelector('.add2');
    addChecked.innerHTML='Add';
    addChecked.disabled=false;
    quantity.value--;
  }
  price2.value=-(10.99);
}

var price3=document.querySelector('.list-items .item3 .price')
function plus3(){
  number.value++;
  let quantity=document.querySelector('.list-items .item3 #quantity');
  quantity.value++;
  price3.value=quantity.value*(10.99);
}

function minus3() {
  if (number.value>=1) {
    number.value--;
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
  price3.value=-(10.99);
}

var price4=document.querySelector('.list-items .item4 .price')
function plus4(){
  var price4=document.querySelector('.list-items .item4 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item4 #quantity');
  quantity.value++;
  price4.value=quantity.value*(10.99);
}

function minus4() {
  if (number.value>=1) {
    number.value--;
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
  price4.value=-(11.50);
}

var price5=document.querySelector('.list-items .item5 .price')
function plus5(){
  var price1=document.querySelector('.list-items .item5 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item5 #quantity');
  quantity.value++;
  price5.value=quantity.value*(10.99);
}

function minus5() {
  if (number.value>=1) {
    number.value--;
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
  price5.value=-(10.99);
}

var price6=document.querySelector('.list-items .item6 .price')
function plus6(){
  var price1=document.querySelector('.list-items .item6 .price')
  number.value++;
  let quantity=document.querySelector('.list-items .item6 #quantity');
  quantity.value++;
  price6.value=quantity.value*(10.99);
}

function minus6() {
  if (number.value>=1) {
    number.value--;
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
  price6.value=-(10.99);
}
