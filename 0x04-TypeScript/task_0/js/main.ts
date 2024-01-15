interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'USA'
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 29,
  location: 'USA'
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table')

studentsList.forEach(student => {
  const row = document.createElement('tr')
  row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
    `
  table.appendChild(row)
})

document.body.appendChild(table) 
