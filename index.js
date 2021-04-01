const inquirer = require("inquirer")
const myConnection = require("./config/connection")


const runIt = async () => {
    let answer = await inquirer
        .prompt({
            name: 'firstAnswer',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees?',
                'View All Departments?',
                'View Employee Roles?',
                'Add Employee?',
                'Add Department?',
                'Add Role?',
                'Update Employee Roles?'

            ],
        })

    switch (answer.firstAnswer) {
        case 'View All Employees?':
            viewAllEmployees();
            break;

        case 'View All Departments?':
            viewAllDepartments();
            break;

        case 'View Employee Roles?':
            viewEmployeeRoles();
            break;

        case 'Add Employee?':
            addEmployee();
            break;

        case 'Add Department?':
            addDepartment()
            break;

        case 'Add Role?':
            addRole()
            break;

        case 'Update Employee Role?':
            updateEmployeeRole()
            break;

        default:
            console.log(`Invalid action: ${answer.firstAnswer}`);
            break;

    }

};

runIt()
//! this one should be simple. pretty much going to be a select all deal and display with the console.thing npm package/ pretty sure ill have to do some joining to show all the employee details based off of gitlab gif
const viewAllEmployees = () => {
    //here we use SELECT to display all the tables and rows we would like to reference
    // We use CONCAT AS to make a variable that will store the specified information together in one place to call on later
    // We use From LEFT JOIN ON to dictate what table information is being used from which tables.
    myConnection.query("SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS employee, role.title, role.salary, department.name as department_name,  CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.last_name", function (err, result) {
        console.table(result)
    })

}
// this one should also be pretty simple and resemble the above
const viewAllDepartments = () => {
    myConnection.query("SELECT * FROM department", function (err, result) {
        console.table(result)
    })
}
// this one should be pretty simple as well
const viewEmployeeRoles = () => {
    myConnection.query("SELECT * FROM role", function (err, result) {
        console.table(result)
    })
}
// i think this one wont need any joins
// todo addEmployee(){}
// shouldnt need joins for this one either
// todo addDepartment(){}
// same
// todo addRole(){}
//! im not sure about this one though... this is going to access employee and then change their role... i dont know what thats going to look like 
// todo updateEmployeeRole(){}



