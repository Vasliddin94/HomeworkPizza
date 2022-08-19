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
  let eventualList=document.querySelector('.list-items .row');
  let addItem=document.querySelector('.item1');
  eventualList.append(addItem);
  let addBtn=document.querySelector('.add1');
  addBtn.style.display='none';
  let plus=document.querySelector('.item1 .plus');
  plus.style.display='block';
  let minus=document.querySelector('.item1 .minus');
  minus.style.display='block';
  number.value++;
  let quantity=document.querySelector('.item1 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let price=document.querySelector('.item1 .price');
  totalPrice.value=+price.value;

}

function add2(){
  let eventualList=document.querySelector('.list-items .row');
  let addItem=document.querySelector('.item2');
  eventualList.append(addItem);
  let addBtn=document.querySelector('.add2');
  addBtn.style.display='none';
  let plus=document.querySelector('.item2 .plus');
  plus.style.display='block';
  let minus=document.querySelector('.item2 .minus');
  minus.style.display='block';
  number.value++;
  let quantity=document.querySelector('.item2 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let price=document.querySelector('.item2 .price');
  totalPrice.value=+price.value;
}

function add3(){
  let eventualList=document.querySelector('.list-items .row');
  let addItem=document.querySelector('.item3');
  eventualList.append(addItem);
  let addBtn=document.querySelector('.add3');
  addBtn.style.display='none';
  let plus=document.querySelector('.item3 .plus');
  plus.style.display='block';
  let minus=document.querySelector('.item3 .minus');
  minus.style.display='block';
  number.value++;
  let quantity=document.querySelector('.item3 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let price=document.querySelector('.item3 .price');
  totalPrice.value=+price.value;
}

function add4(){
  let eventualList=document.querySelector('.list-items .row');
  let addItem=document.querySelector('.item4');
  eventualList.append(addItem);
  let addBtn=document.querySelector('.add4');
  addBtn.style.display='none';
  let plus=document.querySelector('.item4 .plus');
  plus.style.display='block';
  let minus=document.querySelector('.item4 .minus');
  minus.style.display='block';
  number.value++;
  let quantity=document.querySelector('.item4 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let price=document.querySelector('.item4 .price');
  totalPrice.value=+price.value;
}

function add5(){
  let eventualList=document.querySelector('.list-items .row');
  let addItem=document.querySelector('.item5');
  eventualList.append(addItem);
  let addBtn=document.querySelector('.add5');
  addBtn.style.display='none';
  let plus=document.querySelector('.item5 .plus');
  plus.style.display='block';
  let minus=document.querySelector('.item5 .minus');
  minus.style.display='block';
  number.value++;
  let quantity=document.querySelector('.item5 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let price=document.querySelector('.item5 .price');
  totalPrice.value=+price.value;
}

function add6(){
  let eventualList=document.querySelector('.list-items .row');
  let addItem=document.querySelector('.item6');
  eventualList.append(addItem);
  let addBtn=document.querySelector('.add6');
  addBtn.style.display='none';
  let plus=document.querySelector('.item6 .plus');
  plus.style.display='block';
  let minus=document.querySelector('.item6 .minus');
  minus.style.display='block';
  number.value++;
  let quantity=document.querySelector('.item6 #quantity');
  quantity.style.display='inline';
  quantity.value++;
  let price=document.querySelector('.item6 .price');
  totalPrice.value=+price.value;
}


function plus1(){
  number.value++;
  let quantity=document.querySelector('.item1 #quantity');
  quantity.value++;
}

function minus1() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.item1 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item1=document.querySelector('.list-items .item1');
    item1.style.display='none'
  }
}



function plus2(){
  number.value++;
  let quantity=document.querySelector('.item2 #quantity');
  quantity.value++;
}

function minus2() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.item2 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item2=document.querySelector('.list-items .item2');
    item2.style.display='none'
  }
}

function plus3(){
  number.value++;
  let quantity=document.querySelector('.item3 #quantity');
  quantity.value++;
}

function minus3() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.item3 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item3=document.querySelector('.list-items .item3');
    item3.style.display='none'
  }
}

function plus4(){
  number.value++;
  let quantity=document.querySelector('.item4 #quantity');
  quantity.value++;
}

function minus4() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.item4 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item4=document.querySelector('.list-items .item4');
    item4.style.display='none'
  }
}

function plus5(){
  number.value++;
  let quantity=document.querySelector('.item5 #quantity');
  quantity.value++;
}

function minus5() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.item5 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item5=document.querySelector('.list-items .item5');
    item5.style.display='none'
  }
}

function plus6(){
  number.value++;
  let quantity=document.querySelector('.item6 #quantity');
  quantity.value++;
}

function minus6() {
  if (number.value>=1) {
    number.value--;
  }
  let quantity=document.querySelector('.item6 #quantity');
  if (quantity.value>1) {
    quantity.value--;
  }
  else if (quantity.value=1) {
    let item6=document.querySelector('.list-items .item6');
    item6.style.display='none'
  }
}
