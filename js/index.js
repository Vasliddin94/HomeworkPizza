function addChanges() {
  let cardBody=document.querySelector('.card-body');
  cardBody.style.display='none';
  let mycart=document.querySelector('.mycart');
  mycart.style.display='block';
  let eventualList=document.querySelector('.list-items');
  eventualList.style.display='block'

};

function back(){
  let cardBody=document.querySelector('.card-body');
  cardBody.style.display='block';
  let mycart=document.querySelector('.mycart');
  mycart.style.display='none'
}



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
  let num=document.querySelector('#num');
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
}
