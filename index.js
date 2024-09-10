let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

const form = document.querySelector("form");
const numberInput = form.querySelector('input[name="number"]');
const numberBankOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOneButton = document.getElementById("sortOne");
const sortAllButton = document.getElementById("sortAll");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number = parseInt(numberInput.value);
  if (!isNaN(number)) {
    numberBank.push(number);
    updateNumberBank();
    numberInput.value = "";
  }
});

sortOneButton.addEventListener("click", sortOneNumber);
sortAllButton.addEventListener("click", sortAllNumbers);

function updateNumberBank() {
  numberBankOutput.textContent = numberBank.join(", ");
}

function updateSortedNumbers() {
  oddsOutput.textContent = oddNumbers.join(", ");
  evensOutput.textContent = evenNumbers.join(", ");
}

function sortOneNumber() {
  if (numberBank.length > 0) {
    const number = numberBank.shift();
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    updateNumberBank();
    updateSortedNumbers();
  }
}
function sortAllNumbers() {
  numberBank.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  });
  numberBank = [];
  updateNumberBank();
  updateSortedNumbers();
}
