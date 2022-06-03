//console.dir(document);

// console.log(document.domain);//<-- shows IP adress-->
// console.log(document.URL);//Shows The URL on console
// console.log(document.title);//It going to show us the title of the document
// console.log(document.doctype);//shows the doctype of the document
// console.log(document.head);//showing head of the document on the console
// console.log(document.body);//showing everything listed in the body
// console.log(document.all);//shows every tree structure in the document
// console.log(document.all[10]);//calling line 10 inside the document
// document.all[10].textContent='We just Changed The Header';//manipulate javscript using document attribute to change the header
// console.log(document.forms);//shows how many particulars forms we have 
// console.log(document.links);// Here also we checking if we have links in the document
// console.log(document.image);// Checking if we have immages in the document sam as links
// // ///////////////////////////////////////////////

// Access the Dom With GETELEMENTBYID
// console.log(document.getElementById('header-title'));

//Creation of an object variable using the document function.

// let headerTitle = document.getElementById('header-title');//
// headerTitle.textContent = "Im Changing the Header";//using text content we changing the header title
// headerTitle.innerText = "I am Changing It Again";//Changing header title
// headerTitle.style.color = 'hotpink';//changing color style of the header title to hotpink

// ////////////////////////////////////
// /////////////////GetElementByClassName/////////

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// //Styling  propority Attributes through the variables.

// items[1].style.fontWeight='bold';// Adding fontweight to our list item 1
// items[1].style.backgroundColor ='blue';// Changing background color to the list item 1
// items[1].textContent = 'Alpha Kappa Alpha';//naming the textcontent
// items[1].style.color = 'red';//Changing the color to red

// items[2].style.fontWeight='bold';//Adding fontweight to our list item2
// items[2].style.backgroundColor ='red';//Setting background color of the list item 2 to red
// items[2].textContent = 'Zee phi Zeta ';//setting name to the textcontent 
// items[2].style.color = 'green';//Setting color of the list item to green

// items[3].style.fontWeight='bold';//Changing the fontweight
// items[3].style.backgroundColor ='pink';//Setting background color of the list item 3 to pink
// items[3].textContent = 'Akuna matata';//setting name to the textcontent 
// items[3].style.color = 'white';//Setting color of the list item to white

// items[4].style.fontWeight='bold';
// items[4].style.backgroundColor ='yellow';//Setting background color of the list item 4 to yellow
// items[4].textContent = 'Tigray Adey ';//setting name to the textcontent 
// items[4].style.color = 'Black';//Setting color of the list item to black

// items[5].style.fontWeight='bold';
// items[5].style.backgroundColor ='purple';//Setting background color of the list item 5 to purple
// items[5].textContent = 'Gamma Gamma ';//setting name to the textcontent 
// items[5].style.color = 'gray';//Setting color of the list item to gray

// //This a counter which loops all the way untill 10.
// for ( let i=1; i <=10; i++) {
//     console.log(i);
// }
// //This loop will go all the way until 20 by 2 difference
// for (let i=1; i<=20; i +=2){
//     console.log(i);
// }
// //This loop one also go all te way from 100 downward to o with 2 differences.
// for (let i=100; i>=0; i -=2){
//     console.log(i);
// }
// //
// for (var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = 'I Changed The List';
//     items[i].style.color = 'green';
// }
// //this loop will help us to organize our myDiamonds in var number starting index
// const myDiamonds = ['snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lamky','Kibble']
// for (let i = 0; i< myDiamonds.length; i++){
//     console.log(i,myDiamonds[i]);
// }

//////////////////////////////////////
//GetElementByTagName///////

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// //
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'Crimson';
// li[1].style.color = 'white';
// //
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].style.textContent = 'Changed Text';
// }
////////////////////////////////
///////////////////////-Query Selector

var header = document.querySelector('#main-header');//

header.style.borderBottom = 'solid 4px red';//Changing the attribute with the with the bottom border color red
var input = document.querySelector('input');//creating of the variable input on the element
input.value = "Changed The Input Box Text";//Changing the input value to Changed the input box text

var submit = document.querySelector("input[type='submit']");//Using query selector for the input element and provided an attribute selector type for the document

submit.value = "SEND"; //created variable and changed the value attribute of the button


// 
var item = document.querySelector('.list-group-item');
item.style.color = 'Green';
//
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'purple';
