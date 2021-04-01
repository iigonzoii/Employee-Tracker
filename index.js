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
                new inquirer.Separator(),
                'View All Departments?',
                new inquirer.Separator(),
                'View Employee Roles?',
                new inquirer.Separator(),
                'Add Employee?',
                new inquirer.Separator(),
                'Add Department?',
                new inquirer.Separator(),
                'Add Role?',
                new inquirer.Separator(),
                'Update Employee Roles?',
                new inquirer.Separator(),
                'Exit'

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

        case 'Exit':
            myConnection.end()
            break;

        default:
            console.log(`Invalid action: ${answer.firstAnswer}`);
            break;

    }

};

runIt()

//here we use SELECT to display all the tables and rows we would like to reference
// We use CONCAT AS to make a variable thatwill store the specified information together in one place to call on later
// We use From LEFT JOIN ON to dictate what table information is being used from whichtables.
const viewAllEmployees = () => {

    myConnection.query("SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS employee, role.title, role.salary, department.name as department_name,  CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.last_name", function (err, result) {
        console.table(result)
    })
    runIt()

}
// this one should also be pretty simple and resemble the above
// ! I had to delete extra rows from my workbench because it was populating everything three times back to back 

const viewAllDepartments = () => {
    myConnection.query("SELECT * FROM department", function (err, result) {
        console.table(result)
    })
    runIt()
}

// ! I had to delete extra rows from my workbench because it was populating everything three times back to back 
// this one should be pretty simple as well
const viewEmployeeRoles = () => {
    myConnection.query("SELECT title FROM role", function (err, result) {
        console.table(result)
    })
    runIt()
}
// here we ask the user questions with inquirer that we will convert into data to populate our table moving forward
const addEmployee = async () => {
    let answer2 = await inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: "What is the employee's first name?",
            },
            {
                name: 'lastName',
                type: 'input',
                message: "What is the employee's last name?",
            },
            {
                name: 'roleId',
                type: 'input',
                message: "What is the employee's role id?",
            },
            {
                name: 'managerId',
                type: 'list',
                message: "What is the id number for this employees manager?",
                choices: [
                    1,
                    new inquirer.Separator(),
                    2,
                    new inquirer.Separator(),
                    3,
                    new inquirer.Separator(),
                    6,
                ],
            }])
    // .then((answer2) => {


    //       myConnection.query("INSERT INTO employee SET ?", 
    //       {

    //           first_name: answer2.firstName,
    //           last_name: answer2.lastName,
    //           manager_id: answer2.managerId,
    //           role_id: answer2.roleId

    //         }, function(err){
    //             if (err) throw err
    //             console.table(answer2)
    //           runIt()
    //       })

    //   })

    myConnection.query("INSERT INTO employee SET ?",
        {

            //  here we reference the column names of the employee table on the left to the input data from the users answers to our inquirer questions on the right
            first_name: answer2.firstName,
            last_name: answer2.lastName,
            manager_id: answer2.managerId,
            role_id: answer2.roleId,

        })
    console.table(answer2)
    runIt()

}


// shouldnt need joins for this one either
const addDepartment = async () => {
    let answer3 = await inquirer.prompt({
        name: "newDepartment",
        type: "input",
        message: "what is the name of the new department?"
    })
    myConnection.query("INSERT INTO department SET ?",
        {
        // here we take the users inputed data and store it into the name column of the Department table
            name: answer3.newDepartment

        })
    console.table(answer3)
    runIt()
}
// same
const addRole = async () => {
    let answer4 = await inquirer.prompt([{
        name: "newRoll",
        type: "input",
        message: "what is the name of the new role?"
    },
    {
        name: "newRollDepartment",
        type: "input",
        message: "what is the ID number for the department this roll belongs to?"
    },
    {
        name: "newRollId",
        type: "input",
        message: "what is the ID number for this roll?"
    }])
    myConnection.query("INSERT INTO role SET ?",
        {
       
            title: answer4.newRole,
            department_id: answer4.newRollDepartment

        })
    console.table(answer4)
    runIt()
}
//! im not sure about this one though... this is going to access employee and then change their role... i dont know what thats going to look like 
// todo updateEmployeeRole(){}



