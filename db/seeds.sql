INSERT INTO department (id, name)
VALUES (1, Sales),
       (2, Engineering),
       (3, Food_Bev),
       (4, Housekeeping);

/*exp ("food and bev",1)*/
INSERT INTO  roles (role_id, job_title, department, salary)
VALUES (1, Salesperson, Sales, 30000),
       (2, Lead Engineer, Engineering, 80000),
       (3, Supervisor, Food_Bev, 32000),
       (4, Supervisor, Housekeeping, 25000);
/*exp ("supervisor",1,"food and bev", 32000)*/

INSERT INTO employee (employee_id, first_name, last_name, job_title, department, salary, manager)
VALUES(1, Micheal, Scott, Manager, Management, 100000, null),
      (2, Stanley, Hudson, Salesperson, Sales, 75000, Micheal Scott),
      (3, Dwight, Shrute, Lead Engineer, Engineering,80000, Micheal Scott),
      (4, Angela, Martin, Supervisor, Food_Bev, 32000, Phyllis Vance),
      (5, Erin, Hannon, Supervisor, Housekeeping, 25000, Micheal Scott);  
/*exp(1,"Jane", "Smith", "supervisor", "Mary","shelley")*/