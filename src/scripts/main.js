'use strict';

console.log('Hello World!');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

let rowState = document.querySelectorAll('tr').length;
console.log(rowState);

// let columnState = document.querySelector('tr').children.length;
// let columnState = document.querySelectorAll('td').length / rowState;
let columnState = 4;
console.log(columnState);

appendRow.addEventListener('click', (e) => {
  const newRow = document.createElement('tr');

  for (let i = 0; i < columnState; i++) {
    const newRowCell = document.createElement('td');

    newRow.append(newRowCell);
  }

  table.append(newRow);
  rowState++;
});

// removeRow.addEventListener('click', (e) => {

// });

// appendColumn.addEventListener('click', (e) => {

// });

// removeColumn.addEventListener('click', (e) => {

// });


