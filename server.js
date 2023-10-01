const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tinkerbell',
    database: 'employee_tracker'
});

