DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

-- here we create our Departmnent table
CREATE TABLE department;(
    -- here we require an id and set it to auto increment
    id INT NOT NULL auto_increment,
    -- make a row called name
    name VARCHAR(30),
    -- set primary id to id
    PRIMARY KEY(id)
);



