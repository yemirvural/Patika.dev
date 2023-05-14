const fs = require('fs');

const array = [];
const employee= {"name": "Employee 1 Name", "salary": 2000};
array.push(employee);

fs.writeFile('employees.json', JSON.stringify(array), 'utf8', (err) => {
    if(err) console.log(err)
});

fs.readFile('employees.json', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.readFile('employees.json', 'utf8',(err, data) => {
    if (err) throw err;
    const employeeData = JSON.parse(data);
    const employee = employeeData.find(employee => employee.name === 'Employee 1 Name');
    employee.salary = 3500;
    fs.writeFile('employees.json', JSON.stringify(employeeData), 'utf8',(err) => {
      if (err) throw err;
      console.log('Employee data is updated in employees.json');
    });
});

fs.unlink('employees.json', (err) => {
    if (err) throw err;
    console.log('employees.json file is deleted');
})