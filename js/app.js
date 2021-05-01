'use strict';
alert('Welcome to my web page I hope you are having a good time');

let naMe = prompt('what your name please');

alert('Welcome to my web page,  ' + naMe + '  please answer the questions as y/n or yes/no');

let count = 0;

let ansWer = prompt('Do you think know me?');

function fun1() {
    switch (ansWer.toLowerCase()) {
        case 'y':
        case 'yes':

            alert(' thank you  ' + naMe + '  nice to meet you');
            count++;
            break;
        case 'n':
        case 'no':
            alert('ok IM Sanaa');
            break;
        default:
            alert(' please answer the questions as y/n or yes/no');

    }
}


function fun2() {
    let frOm = prompt('Do you  think  I am from Amman?');
    switch (frOm.toLowerCase()) {
        case 'y':
        case 'yes':

            alert('no Im from maan');
            break;
        case 'n':
        case 'no':
            alert('OK ,' + naMe + ' correct im from Maan')
            count++;
            break;
        default:
            alert(' please answer the questions as y/n or yes/no');

    }
}

function fun3() {

    let oLd = prompt('Do you think I am twenty?');
    switch (oLd.toLowerCase()) {
        case 'y':
        case 'yes':

            alert('no  ' + naMe + ' im 33 age');
            break;
        case 'n':
        case 'no':
            alert('correct im 33 age');
            count++;
            break;
        default:
            alert(' please answer the questions as y/n or yes/no');

    }
}

function fun4() {
    let maJor = prompt('Did you think I graduate in programming??');
    switch (maJor.toLowerCase()) {
        case 'y':
        case 'yes':

            alert(' yes its CS ');
            count++;
            break;
        case 'n':
        case 'no':
            alert('My major is computer science');
            break;
        default:
            alert(' please answer the questions as y/n or yes/no');

    }
}

function fun5() {
    let namUnv = prompt('Do you think Al-Hussein Bin Talal University is my university?');
    switch (namUnv.toLowerCase()) {
        case 'y':
        case 'yes':

            alert('correct thank you');
            count++;
            break;
        case 'n':
        case 'no':
            alert('ok Its Al-Hussein Bin Talal University');
            break;
        default:
            alert(' please answer the questions as y/n or yes/no');

    }
}

function fun6() {
    for (let i = 0; i < 4; i++) {
        let nUmch = prompt('Can you guess how many children I have? Please enter a number from 1 - 10 ,you have 4 opportunities');
        if (nUmch > 2) {
            alert('ooooh Its high');
        } else if (nUmch < 2) {
            alert('too low');
        } else if (nUmch == 2) {
            alert('correct i have 2 children');
            count++;
            break
        }
        if (i == 3) {
            alert('ok.... you Loser i have 2 children ');
        }
    }
}


function fun7() {
    let faVfru = ['Pineapple', 'cream', 'coconut', 'strawberry', 'blueberry'];
    let ans = false;
    for (let x = 0; x < 6; x++) {
        let fruits = prompt('What about my favorite fruits? Can you guess it , you have 6 opportunities');
        for (let i = 0; i < faVfru.length; i++) {
            if (fruits === faVfru[i]) {
                alert('yes thank you');
                count++;
                ans = true;
                break;

            }
        }
        if (ans) {
            break;
        }
        alert('please try again');
    }
    alert('ok my favorite fruits is ' + faVfru);
}

fun1();
fun2();
fun3();
fun4();
fun5();
fun6();
fun7();


alert('Thank you  ' + naMe + '  your scor is ' + count);


document.write('Thank you very much ' + naMe + 'I hope you enjoyed it');

