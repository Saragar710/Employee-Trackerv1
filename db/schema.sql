DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE  employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) /*TO HOLD DEPT NAME*/
)

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30), /*TO HOLD ROLE TITLE*/
    salary DECIMAL, /*TO HOLD ROLE SALARY*/
    department_id  INT/*TO HOLD REFERENCE TO DEPARTMENT ROLE BELONGS TO */
)

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT /*to hold reference to another employee that is the manager of the current employee
                          null if the employee has no manager*/
)