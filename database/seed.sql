USE employee_tracker;
-- here we create our columns that will be inserted into our department table in the "name" row
INSERT INTO department(name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

-- here we create our columns for our role table and assign values to be inserted into the title, salary, and department_id rows.
-- values and and rows must correspond in order they are written ex sales lead goes with title so they are both written in order to match
INSERT INTO role(title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Accountant" 125000, 3),
    ("Legal Team lead", 250000, 4),
    ("Lawyer", 190000, 4);
-- ! how do i identify the manager id if the employees havent been defined yet
-- !do they get id's assigned to them in order since they are getting inserted into a table that has id set as primary? 
    INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES("John", "Doe", 1, 3),
    ("Mike" "Chan", 1, 1),
    ("Ashley", "Rodriguez", 2, NULL),
    ("Kevin" "Tupik", 2, 3)
    ("Malia", "Brown", 3, NULL),
    ("Sarah", "Lourd", 4, NULL),
    ("Tom", "Allen", 4, 6),
    ("Chirstian", "Eckenrode", 2, NULL);



