'use strict';
alert('Welcome to my web page I hope you are having a good time');

let naMe= prompt('what your name please');

alert('Welcome to my web page, ' + naMe + ' please answer the questions as y/n or yes/no');

let ansWer = prompt('Do you think know me?');

switch( ansWer.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert(' thank you' + naMe +'nice to meet you'); 
        break;
    case 'n':
    case 'no':
        alert('ok IM Sanaa');
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

};
let frOm = prompt('Do you  think  I am from Amman?');
switch(frOm.toLowerCase()) {
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('no Im from maan' ); 
        break;
    case 'n':
    case 'no':
        alert('OK ,' + naMe + ' correct im from Maan')
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
let oLd = prompt('Do you think I am twenty?');
switch ( oLd.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('no' + naMe +' im 33 age'); 
        break;
    case 'n':
    case 'no':
        alert('correct im 33 age');
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
let maJor = prompt('Did you think I graduate in programming??'); 
switch( maJor.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert(' yes its CS '); 
        break;
    case 'n':
    case 'no':
        alert('My major is computer science');
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
let namUnv =prompt('Do you think Al-Hussein Bin Talal University is my university?');
switch (namUnv.toLowerCase()){
    case 'y':
    case 'yes':
        //console.log('correct.');
        alert('correct thank you'); 
        break;
    case 'n':
    case 'no':
        alert('ok Its Al-Hussein Bin Talal University');
        break;
    default : 
      alert(' please answer the questions as y/n or yes/no');  

}
document.write('Thank you very much ' + naMe + 'for my page, I hope you enjoyed it');