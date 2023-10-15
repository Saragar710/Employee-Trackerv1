const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tinkerbell',
    database: 'employee_db'
},
    console.log(`Connected to the employee_db database.`)
);

app.post('/api/new-employee', ({body} , res) => {
    const sql = `INSERT INTO employees (employee_id, first_name, last_name, role_id,manager_id)`
    `INSERT INTO department (id, name)`
    `INSERT INTO role (id, title, salary, department_id)`

})
