'use strict';
alert('Welcome to my web page I hope you are having a good time');

let naMe= prompt('what your name please');

alert('Welcome to my web page, ' + naMe + ' please answer the questions as y/n or yes/no');

let ansWer = prompt('Do you know me?');

switch( ansWer.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('correct thank you'); 
        break;
    case 'n':
    case 'no':
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

};
let frOm = prompt('Do you know where I am from?');
switch(frOm.toLowerCase()) {
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('correct thank you'); 
        break;
    case 'n':
    case 'no':
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
let oLd = prompt('Do you have an idea how old I am');
switch ( oLd.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('correct thank you'); 
        break;
    case 'n':
    case 'no':
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
let maJor = prompt('Do you know my college major?'); 
switch( maJor.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('correct thank you'); 
        break;
    case 'n':
    case 'no':
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
let namUnv =prompt( 'Do you know what my university called?');
switch (namUnv.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('correct thank you'); 
        break;
    case 'n':
    case 'no':
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
document.write('Thank you very much ' + naMe + 'for my page, I hope you enjoyed it');