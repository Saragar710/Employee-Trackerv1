const inquirer = require('inquirer');
const DB = require("db");
const { findAllDepartments } = require('./db');
const mysql = require("mysql2");

function quesPrompt() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "View all Employees?",
            choices: [
                {
                    name: "View ALL Employees",
                    value: "VIEW_EMPLOYEES"
                },
            ]
        },
        {
            type: "list",
            name: "choice",
            message: "View all departments?",
            choices: [
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
            ]
        },
        {
            type: "list",
            name: "choice",
            message: "View all roles?",
            choices: [
                {
                    name: "View ALL Roles",
                    value: "VIEW_ROLES"
                },
            ]
        },
        {
            type: "list",
            name: 'choice',
            message: "What department would you like to add?",
            choices: [
                {
                    name: "Add a Department",
                    value: "ADD_DEPARTMENT"
                }
            ]

        },

        {
            type: 'list',
            name: 'choice',
            message: "What role would you like to add?",
            choices: [
                {
                    name: "Add a Role",
                    value: "ADD_ROLE"
                }
            ]

        },
        {
            type: 'list',
            name: 'choice',
            message: "What employee would you like to add ",
            choices: [
                {
                    name: "ADD an Employee",
                    value: "ADD_EMPLOYEE"
                }
            ]

        },
        {
            type: 'list',
            name: 'updateEmployee',
            message: "Update employee role",
            choices: [
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEEROLE"
                }
            ]
        },  
        {  
            type: 'list',
            name: 'updateRole',
            message: "Update Role",
            choices: [
                {
                    name: "Update Role",
                    value: "UPDATE_ROLE"
                }
            ]
        },
        {
            type: 'list',
            name: 'updateDepartment',
            message: "Update Department",
            choices: [
                {
                    name: "Update Department",
                    value: "UPDATE_Department"
                }
            ]

        }

    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;

            case "VIEW_Roles":
                viewRoles();
                break;
            case "VIEW_Departments":
                viewDepartments();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "UPDATE_EMPLOYEE":
                updateEmployee();
                break;
            case "UPDATE_ROLE":
                updateRole();
                break;
            case "UPDATE_DEPARTMENT":
                updateDepartment();
                break;
            // case "VIEW_EMPLOYEES":
            //     viewEmployees();
            //     break;
            // case "VIEW_EMPLOYEES":
            //     viewEmployees();
            //     break;
            // case "VIEW_EMPLOYEES":
            //     viewEmployees();
            //     break;
            // case "VIEW_EMPLOYEES":
            //     viewEmployees();
            //     break;

            default:
                quit();

        }
    })
}
function viewAllEmployees() {
   db.viewAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees)
        })
        .then(() => quesPrompt())
}
function viewAllDepartments() {
    db.viewAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.table(departments)
        })
        .then(() => quesPrompt())
}
function viewAllRoles() {
    db.viewAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles)
        })
        .then(() => quesPrompt())
}
// view roles view departments use same template look at index.js
// clean up questions
// add role update 
// viewAllDepartments() {
//     // const createNewDepartment = `INSERT INTO department (name) VALUES (?) `;

//     // const params = [body.name];


// }
// viewAllEmployees() {

// }
// viewAllRoles() {

// }
function addDepartment(department) {
 const sql = 'INSERT INTO departments  SET (name) VALUES (?)';
       db.query(sql, [department], (err, result) => {
    if (err) throw err;
 })

}
 function addNewEmployee(employee) {
    const sql = 'INSERT INTO employee  SET (name) VALUES (?)';
    db.query(sql, [employee], (err, result) => {
        if (err) throw err;
    })
}
function addnewRole(role) {
    const sql = 'INSERT INTO role  SET (name) VALUES (?)';
    db.query(sql, [role], (err, result) => {
        if (err) throw err;
    })
}
function updateEmployeeRole(employeeRole) {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    db.query(sql, [employeeRole], (err, result) => {
        if (err) throw err;
    })
}
function updateDepartment(department) {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    db.query(sql, [department], (err, result) => {
        if (err) throw err;
    })
}
// updateRole(employeeRole) {
//     const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//     DB.query(sql, [role], (err, result) => {
//         if (err) throw err;
//     })
// }