const inquirer = require("inquirer")

const runIt = () => {
    inquirer
        .prompt({
            name: 'firstAnswer',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees?',
                'View All Employees By Department?',
                'View All Employees By Manager?',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager'
            ],
        })
        .then((answer) => {
            switch (answer.firstAnswer) {
                case 'View All Employees?':
                    viewAllEmployees();
                    break;

                case 'View All Employees By Department?':
                    viewAllEmployeesByDepartment();
                    break;

                case 'View All Employees By Manager?':
                    viewAllEmployeesByManager();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'Remove Employee':
                    removeEmployee()
                    break;

                case 'Update Employee Role':
                    updateEmployeeRole()
                    break;

                case 'Update Employee Role':
                    updateEmployeeManager()
                    break;

                //! does connection end go here? doesnt make sense to connection.end();
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};
