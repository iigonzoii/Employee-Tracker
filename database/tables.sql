DROP DATABASE IF EXISTS employee_tracker;

CREATE DATABASE employee_tracker;

USE employee_tracker;

-- here we create our Departmnent table
CREATE TABLE department (
    -- here we require an id and set it to auto increment
    id INT NOT NULL auto_increment,
    -- make a row called name
    name VARCHAR(30),
    -- set primary key to id
    PRIMARY KEY(id)
);
-- !TA   so in reference to line 12 we are not creating a row called name. we are stating that there will be a row in this table, and that row will be a string. we are basically setting a place holder for when we make our seed file. so when we say "insert into" what follows in the () is going to be the rows visual display name, and the "values" are going to be the columns that run horizontally and match with the corresponding row?

-- ! TA  when using joins the columns syntax is actually referring to the rows that run vertically and represent the field name not the values

-- here we create a table for our employees roles
CREATE TABLE role (
    -- here we require an id and set it to auto increment
    id INT NOT NULL auto_increment,
    -- make a row called title
    title VARCHAR(30) NOT NULL,
    -- row for salary
    salary DECIMAL,
    -- row for department id/ also refrences parent table
    department_id INT,
    -- if runs into issues with foreign key join on 26
    -- here we establish our foreign id and the location it was defined and that we are refrencing
    -- FOREIGN KEY (deparment_id)
    -- REFERENCES department(id)
    -- with cascade we update both parent and child tables at the same time
    -- ON UPDATE CASCADE
    -- ON DELETE CASCADE,
    -- set primary key to id
    PRIMARY KEY(id)
);

-- here we create our employee table
CREATE TABLE employee (
-- here we require an id and set it to auto increment
    id INT NOT NULL auto_increment PRIMARY KEY,
    -- make a row called first name
    first_name VARCHAR(30),
    -- make a row called last name
    last_name VARCHAR(30),
-- make a row called role id
    role_id INT,
    -- make  a row called manager id
    manager_id INT
    -- here we establish our foreign id and the location it was defined and that we are refrencing  
    -- FOREIGN KEY (role_id) REFERENCES role(id)
    -- with cascade we update both parent and child tables at the same time
    -- ON UPDATE CASCADE
    -- ON DELETE CASCADE,
    -- -- here we establish our foreign id and the location it was defined and that we are refrencing
    -- FOREIGN KEY (manager_id) REFERENCES employee(id)
    -- with cascade we update both parent and child tables at the same time
    -- ON UPDATE CASCADE
    -- ON DELETE CASCADE
);




