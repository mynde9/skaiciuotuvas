'use strict';

function clickas(buttonValue) {
    if (buttonValue == 'C') {
        document.getElementById('valueshow').value = '0';
    }
    else {
        if (document.getElementById('valueshow').value == '0') {

            document.getElementById('valueshow').value = buttonValue;
        }

        else {

            document.getElementById('valueshow').value += buttonValue;
        }
    }
}

function suma(equation) {
    var answer = eval(equation);
    document.getElementById('valueshow').value = answer;
}
