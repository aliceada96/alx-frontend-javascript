interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let studentsList: Student[] = [
    {firstName: 'John', lastName: 'Doe', age: 15, location: 'New York'},
    {firstName: 'Jane', lastName: 'Doe', age: 15, location: 'New York'},
];

function generateTable(table: HTMLTableElement, data: Student[]) {
  for (let element of data) {
    let row = table.insertRow();
    for (const key in studentsList) {
      let cell = row.insertCell();
      let text = document.createTextNode(studentsList[key].toString());
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector('table')!;
let data = Object.keys(studentsList[0]);
generateTable(table, studentsList);
