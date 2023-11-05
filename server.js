const { prompt } = require('inquirer');
const DB = require('./db');


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

                {
                    name: "View ALL Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add a Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add a Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "ADD an Employee",
                    value: "ADD_EMPLOYEE"
                },    
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "VIEW_DEPARTMENTS":
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
            default:
                quit();

        }
    })
}
function viewEmployees() {
    DB.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.table(employees)
        })
        .then(() => quesPrompt())
}
function viewDepartments() {
    DB.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.table(departments)
        })
        .then(() => quesPrompt())
}
function viewRoles() {
    DB.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.table(roles)
        })
        .then(() => quesPrompt())
}

function addDepartment(department) {
   prompt([
        {
            name: "name",
            message: "What is the name of your department?"
        }
    ])
        .then(res => {
            let name = res;
            DB.createDepartment(name)
                .then(() => console.log(`Added ${name.name}`))
                .then(() => quesPrompt())
        })
}
function addEmployee(employee) {
    prompt([
        {
            name: "first_name",
            message: "What is the employees first name?"
        },
        {
            name: "last_name",
            message: "What is the employess last name?"
        }

    ])
        .then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;
            DB.findAllRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }));
                    prompt(
                        {
                            type: "list",
                            name: "roleId",
                            message: "What is the employees role?",
                            choices: roleChoices
                        },

                    )
                        .then(res => {
                            let roleId = res.roleId;
                            DB.findAllEmployees()
                                .then(([rows]) => {
                                    let employees = rows;
                                    const managerChoices = employees.map(({ id, first_name, last_name }) => ({
                                        name: `${first_name} ${last_name}`,
                                        value: id
                                    }));
                                    managerChoices.unshift({ name: "None", value: null });
                                  prompt(
                                        {
                                            type: "list",
                                            name: "managerId",
                                            message: "What is the employees manager?",
                                            choices: managerChoices
                                        }

                                    )
                                        .then(res => {
                                            let employee = {
                                                manager_id: res.managerId,
                                                role_id: roleId,
                                                first_name: firstName,
                                                last_name: lastName
                                            }
                                            DB.createEmployee(employee)

                                        })
                                        .then(() => quesPrompt())
                                })
                        })
                })
        })
}
function addRole(role) {
    DB.findAllDepartments()
        .then(([rows]) => {
            let departments = rows;
           
            const departmentChoices = department.map(({ id, name}) => ({
                name: name,
                value: id
            }));
            prompt([
                {
                    name: "title",
                    message: "What is the name of the department?"
                },
                {
                    name: "salary",
                    message: "What is the salary amount?"
                },
                {
                    type: "list",
                    name: "department_Id",
                    message: "What is the department?",
                    choices: departmentChoices
                },

             ] )
                .then(role => {
                    DB.createRole(role)
                    .then(() => console.log("What is the new role"))
                   
        
        .then(() => quesPrompt())
                })
            })
}
quesPrompt();

function quit() {
    console.log("Goodbye")
    process.exit();
}
