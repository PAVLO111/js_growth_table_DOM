'use strict';

// console.log('Hello World!');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

let rowState = document.querySelectorAll('tr').length;
// console.log(rowState);

let columnState = document.querySelector('tr').children.length;
// console.log(columnState);

function checkState() {
  rowState.disabled = rowState >= 10;
  columnState.disabled = columnState >= 10;

  rowState.disabled = rowState <= 2;
  columnState.disabled = columnState <= 2;
}

appendRow.addEventListener('click', (e) => {
  const newRow = document.createElement('tr');

  for (let i = 0; i < columnState; i++) {
    const newRowCell = document.createElement('td');

    newRow.append(newRowCell);
  }

  table.append(newRow);
  rowState++;
  checkState();
});

removeRow.addEventListener('click', (e) => {
  table.lastElementChild.remove();

  rowState--;
  checkState();
});

appendColumn.addEventListener('click', (e) => {
  const allRows = document.querySelectorAll('tr');

  // console.log(allRows);

  allRows.forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  columnState++;
  checkState();
});

removeColumn.addEventListener('click', (e) => {
  const allRows = document.querySelectorAll('tr');

  allRows.forEach((row) => row.lastChild.remove());

  columnState--;
  checkState();
});
