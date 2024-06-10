const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn,.btno ,.btne , .btnc');

let result = '0';

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  switch (key) {
    case 'c':
    case 'C':
      clearDisplay();
      break;
    case 'Backspace':
      deleteLastChar();
      break;
    case 'Enter':
    case '=':
     calculateResult();
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
    case '+':
    case '-':
    case '*':
    case '/':
    case '.':
      appendToDisplay(key);
      break;
    default:
      break;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.id;

    if (value === 'c') {
     clearDisplay();
    } else if (value === 'ce') {
      clearDisplay();
    } else if (value === 'back') {
      deleteLastChar();
    } else if (value === '=') {
      calculateResult();
      else{
      appendToDisplay(value);
    } 
  });
});

function appendToDisplay(value) {
  if (display.value === '0'){
    display.value= = value;
  } else {
    display.value += vaue;
  }
  result += value;
}

function clearDisplay() {
  display.value ='0';
  result = '0';
}
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
  result = result.slice(0,-1);
  if (display.value === ''){
    display.value ='0';
  }
}

function calculateResult() {
  try {
    const calculatedResult = eval(result);
    display.value = calculatedResult;
    result = calculatedResult.toString();
  } catch (error) {
    display.value = 'Error';
    result = '0';
  }
}
    


