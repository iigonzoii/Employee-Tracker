const inquirer = require("inquirer")

// !do i put the const connection thing in here

const runIt = () => {
    inquirer
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
        .then((answer) => {
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

                

                //! does connection end go here? doesnt make sense to connection.end();
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};

// todo viewAllEmployees(){}
// todo viewAllDepartments(){}
// todo viewEmployeeRoles(){}
// todo addEmployee(){}
// todo addDepartment(){}
// todo addRole(){}
// todo updateEmployeeRole(){}

    
