INSERT INTO department (department_idid, name)
VALUES (1, Sales),
       (2, Engineering),
       (3, Food_Bev),
       (4, Housekeeping);

/*exp ("food and bev",1)*/
INSERT INTO  roles (role_id, title, salary, department_id, )
VALUES ( 1,Salesperson,30000,1),
       ( 2,Lead Engineer,80000, 2),
       (3, Supervisor,32000,3),
       (4, Supervisor, 25000 4);
/*exp ("supervisor",1,"food and bev", 32000)*/

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES( 1,"Stanley"," Hudson", Salesperson, 1 ),
      (2, "Dwight", "Shrute", Lead Engineer, 3),
      (3, "Angela", "Martin", Supervisor, 2),
      ( 4,"Erin", "Hannon", Supervisor, 1);  
/*exp(1,"Jane", "Smith", "supervisor", "Mary","shelley")*/

INSERT INTO manager (manager_id, first_name, last_name)
VALUES (1, "Micheal", "Scott"),
       (2, "Phyllis"," Vance"),
       (3, "David", "Wallace"); 