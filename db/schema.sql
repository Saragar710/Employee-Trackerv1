DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE  employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT PRIMARY KEY (id),
    name VARCHAR(30) /*TO HOLD DEPT NAME*/
)

CREATE TABLE roles (
    id INT PRIMARY KEY (id),
    title VARCHAR(30), /*TO HOLD ROLE TITLE*/
    salary DECIMAL, /*TO HOLD ROLE SALARY*/
    department_id  INT/*TO HOLD REFERENCE TO DEPARTMENT ROLE BELONGS TO */
)

CREATE TABLE employee (
    id INT PRIMARY KEY (id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT,
    manager_id INT NOT NULL /*to hold reference to another employee that is the manager of the current employee
                          null if the employee has no manager*/
)