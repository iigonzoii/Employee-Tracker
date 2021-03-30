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
//   here we select all the data from the employee table and display it using console.table
        myConnection.query("SELECT * FROM employee", function (err,result){
console.table(result)
        })
    
}
// this one should also be pretty simple and resemble the above
// todo viewAllDepartments(){}
// this one should be pretty simple as well
// todo viewEmployeeRoles(){}
// i think this one wont need any joins
// todo addEmployee(){}
// shouldnt need joins for this one either
// todo addDepartment(){}
// same
// todo addRole(){}
//! im not sure about this one though... this is going to access employee and then change their role... i dont know what thats going to look like 
// todo updateEmployeeRole(){}

// !if finished before thursday look into changing stupid .thens to async await

