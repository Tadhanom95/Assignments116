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

let headerTitle = document.getElementById('header-title');//
headerTitle.textContent = "Im Changing the Header";//using text content we changing the header title
headerTitle.innerText = "I am Changing It Again";//Changing header title
headerTitle.style.color = 'hotpink';//changing color style of the header title to hotpink

////////////////////////////////////
/////////////////GetElementByClassName/////////

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
//Styling  propority Attributes through the variables.

items[1].style.fontWeight='bold';// Adding fontweight to our list item 1
items[1].style.backgroundColor ='blue';// Changing background color to the list item 1
items[1].textContent = 'Alpha Kappa Alpha';//naming the textcontent
items[1].style.color = 'red';//Changing the color to red

items[2].style.fontWeight='bold';//Adding fontweight to our list item2
items[2].style.backgroundColor ='red';//Setting background color of the list item 2 to red
items[2].textContent = 'Zee phi Zeta ';//setting name to the textcontent 
items[2].style.color = 'green';//Setting color of the list item to green

items[3].style.fontWeight='bold';//Changing the fontweight
items[3].style.backgroundColor ='pink';//Setting background color of the list item 3 to pink
items[3].textContent = 'Akuna matata';//setting name to the textcontent 
items[3].style.color = 'white';//Setting color of the list item to white

items[4].style.fontWeight='bold';
items[4].style.backgroundColor ='yellow';//Setting background color of the list item 4 to yellow
items[4].textContent = 'Tigray Adey ';//setting name to the textcontent 
items[4].style.color = 'Black';//Setting color of the list item to black

items[5].style.fontWeight='bold';
items[5].style.backgroundColor ='purple';//Setting background color of the list item 5 to purple
items[5].textContent = 'Gamma Gamma ';//setting name to the textcontent 
items[5].style.color = 'gray';//Setting color of the list item to gray



