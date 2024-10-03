let currentOperand = '',
  previousOperand = '',
  operation = undefined;

/**
 * 
 */
function clear() {
  currentOperand = ''
  previousOperand = ''
  operation = undefined
}

/**
 * 
 * @param {String} number Number to append to currentOperand
 */
function appendNumber(number) {
  currentOperand = currentOperand.toString() + number.toString()
}

/**
 * 
 * @param {Sring} operation The operator to be used by the cacul
 * @returns 
 */
function chooseOperation(op) {

    if (currentOperand === '' ) return; // Ne rien faire si aucun nombre n'est entré
    if (previousOperand !== '') {
        compute(); // Effectuer le calcul intermédiaire avant d'ajouter une nouvelle opération

    }

  operation = op
  previousOperand = currentOperand + op
  currentOperand = ''
}

/**
 * 
 * @returns 
 */
function compute() {
    let computation;

    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return
  

  switch (operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current 
      break
    default:
      return
  }
  currentOperand = computation.toString();
  operation = undefined;
  previousOperand = '';
}


// function deleteNumber() {
//     currentOperand = currentOperand.toString().slice(0, -1);
//   }



function updateDisplay() {
  currentOperandTextElement.innerText = currentOperand
  previousOperandTextElement.innerText = previousOperand
}

 
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')

const allClearButton = document.querySelector('[data-all-clear]')
// const deleteButton = document.querySelector('[data-delete]'); // Nouveau bouton DELETE

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')





numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      appendNumber(button.innerText);
      updateDisplay();
    });
  });



operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    chooseOperation(button.innerText)
    updateDisplay()
  })
})  

equalsButton.addEventListener('click', button => {
  compute()
  updateDisplay()
})

allClearButton.addEventListener('click', button => {
  clear()
  updateDisplay()
})

// deleteButton.addEventListener('click', button => {
//     deleteNumber();
//     updateDisplay();
//   });