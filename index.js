const inquirer = require('inquirer');
const fs = require('fs');
const style = require('./dist/css')
const html = require('./dist/html')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let finalTeamArray = []

// add manager

function addManager() {
    inquirer.prompt([
        {
        message: "----What is your managers name?----",
        name: "managerName"
    },
    {
        type: "number",
        message: "----What is your managers id number?----",
        name: "idNumber"
    },
    {
        message: "----What is your managers email address?----",
        name: "email"
    },
    {   
        type: "number",
        message: "----What is your managers office number?----",
        name: "officeNumber"
    },

])

    .then(function (data) {
        const name = data.name
        const idNumber = data.idNumber
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, idNumber, email, officeNumber)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
}

// add engineer




// add intern
// Put team together in html using template literals 