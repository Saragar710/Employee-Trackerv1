const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection
    }
    findAllDepartments(){
        return this.connection.promise().query("SELECT department.id, department.name FROM department");
    }
    findAllEmployees(){
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee ON manager.id = employee.manager_id");
    }
    findAllRoles(){
        return this.connection.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id");
    }
    createDepartment(){
        return this.connection.promise().query("INSERT INTO department SET ?",department)
    }
    createEmployee(employee){
        return this.connection.promise().query("INSERT INTO employee SET ?",employee)
        
    }
    createRole(role){
        return this.connection.promise().query("INSERT INTO role SET ?",role)
    }
    //fix this statement the query statement
    updateEmployeeRole(EmployeeRole){
       // return this.connection.promise().query("UPDATE INTO role SET ?", EmployeeRole)
       return this.connection.promise().query(" UPDATE employee SET role WHERE role_title")
    }
}

module.exports = new DB(connection);