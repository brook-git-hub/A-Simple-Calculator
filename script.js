const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn,.btno ,.btne , .btnc');

let result = '';

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  switch (key) {
    case 'c':
    case 'C':
      display.value = '';
      result = '';
      break;
    case 'Backspace':
      display.value = display.value.slice(0, -1);
      result = result.slice(0, -1);
      break;
    case 'Enter':
    case '=':
      try {
        result = eval(result);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
        result = '';
      }
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
      display.value += key;
      result += key;
      break;
      
    default:
      break;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.id;

    if (value === 'c') {
      display.value = '';
      result = '';
    } else if (value === 'ce') {
      display.value = '';
    } else if (value === 'back') {
      display.value = display.value.slice(0, -1);
      result = result.slice(0, -1);
    } else if (value === '=') {
      try {
        result = eval(result);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
        result = '0';
      }
    } else {
      display.value += value;
      result += value;
    }
  });
});


function appendToDisplay(value) {
  display.value += value;
  result += value;
}


