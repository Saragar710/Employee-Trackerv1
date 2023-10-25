DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY ,
    title VARCHAR(30) UNIQUE NOT NULL, 
    salary DECIMAL UNSIGNED NOT NULL, 
    department_id  INT UNSIGNED NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFRENCES  department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT  AUTO_INCREMENT PRIMARY KEY ,
    first_name VARCHAR(30) NOT NULL ,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFRENCES role(id) ON DELETE CASCADE,
    manager_id INT UNSIGNED,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFRENCES employee(id) ON DELETE SET NULL
                    
);