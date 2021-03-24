var validInput = true;

function updateDisplay(newValue){
    var d = document.getElementById('display');

    switch(newValue){
        case '':
            d.innerHTML = '';
            validInput = true;
            break;

        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            validInput = true;
            break;
        
        case '+':
        case '-':
        case '*':
        case '/':
            if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                validInput = false;
                break;
            }
            else{
                d.innerHTML += newValue;
                validInput = false;
                break;
            }

        case '=':
            if(validInput !== true){
                d.innerHTML = 'Err';
                break;
            }
            else if (d.innerHTML.isEmpty !== true){
                d.innerHTML = eval(d.innerHTML);
                break;
            }
    }
}