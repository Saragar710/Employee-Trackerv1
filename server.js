const inquirer = require('inquirer');
const DB = require("db");

const promptUser = [
    {
        type: 'input',
        name: 'departments',
        message: "View all departments",
        choices: ['Sales', 'Engineering', 'Food_Bev', 'Housekeeping']
    },
    {
        type: 'input',
        name: 'role',
        message: "View all roles",
        choices: ['Salesperson', 'Lead Engineer', 'Supervisor', 'Supervisor']
    },
    {
        type: 'input',
        name: 'employee',
        message: "View all employees",
        choices: ['Stanley Husdson', 'Dwight Shrute', 'Angela Martin', 'Erin Hannon']
    },
    {
        type: 'input',
        name: 'AddDepartment',
        message: "Add a  departments",
        
    },

{
        type: 'input',
        name: 'addRole',
        message: "Add a role",
       
    },
    {
        type: 'input',
        name: 'addEmployee',
        message: "Add an Employee",
        
    },
    {
        type: 'input',
        name: 'updateEmployee',
        message: "Update employee role",
       
    }
   
];
inquirer
.prompt([
    {
        type: 'input',
        name: 'departments',
        message: "View all departments",
        choices: ['Sales', 'Engineering', 'Food_Bev', 'Housekeeping']
    },
    {
        type: 'input',
        name: 'role',
        message: "View all roles",
        choices: ['Salesperson', 'Lead Engineer', 'Supervisor', 'Supervisor']
    },
    {
        type: 'input',
        name: 'employee',
        message: "View all employees",
        choices: ['Stanley Husdson', 'Dwight Shrute', 'Angela Martin', 'Erin Hannon']
    },
    {
        type: 'input',
        name: 'AddDepartment',
        message: "Add a  departments",
        
    },

   {
        type: 'input',
        name: 'addRole',
        message: "Add a role",
       
    },
    {
        type: 'input',
        name: 'addEmployee',
        message: "Add an Employee",
        
    },
    {
        type: 'input',
        name: 'updateEmployee',
        message: "Update employee role",
       
    },

])

