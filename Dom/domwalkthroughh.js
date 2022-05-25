//console.dir(document);

console.log(document.domain);//<-- shows IP adress-->
console.log(document.URL);//Shows The URL on console
console.log(document.title);//It going to show us the title of the document
console.log(document.doctype);//shows the doctype of the document
console.log(document.head);//showing head of the document on the console
console.log(document.body);//showing everything listed in the body
console.log(document.all);//shows every tree structure in the document
console.log(document.all[10]);//calling line 10 inside the document
document.all[10].textContent='We just Changed The Header';//manipulate javscript using document attribute to change the header
console.log(document.forms);//shows how many particulars forms we have 
console.log(document.links);// Here also we checking if we have links in the document
console.log(document.image);// Checking if we have immages in the document sam as links
// ///////////////////////////////////////////////

// Access the Dom With GETELEMENTBYID
console.log(document.getElementById('header-title'));

