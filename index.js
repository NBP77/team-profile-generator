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
        message: "----What is your Managers name?----",
        name: "managerName"
    },
    {
        type: "number",
        message: "----What is your Managers id number?----",
        name: "idNumber"
    },
    {
        message: "----What is your Managers email address?----",
        name: "email"
    },
    {   
        type: "number",
        message: "----What is your Managers office number?----",
        name: "officeNumber"
    },

])

    .then(function (data) {
        const managerName = data.managerName
        const idNumber = data.idNumber
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(managerName, idNumber, email, officeNumber)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
};

// add engineer

function addEngineer() {
    inquirer.prompt([
        {
        message: "----What is your Engineers name?----",
        name: "engineersName"
    },
    {
        type: "number",
        message: "----What is your Engineers id number?----",
        name: "idNumber"
    },
    {
        message: "----What is your Engineers email address?----",
        name: "email"
    },
    {   
        type: "number",
        message: "----What is your Engineers GitHub Username?----",
        name: "githubUsername"
    },

])

    .then(function (data) {
        const engineersName = data.engineersName
        const idNumber = data.idNumber
        const email = data.email
        const githubUsername = data.githubUsername
        const teamMember = new Engineer(engineersName, idNumber, email, githubUsername)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
};

// add intern

function addIntern() {
    inquirer.prompt([
        {
        message: "----What is your Interns name?----",
        name: "internsName"
    },
    {
        type: "number",
        message: "----What is your Interns id number?----",
        name: "idNumber"
    },
    {
        message: "----What is your Interns email address?----",
        name: "email"
    },
    {   
        type: "number",
        message: "----What school did your Intern go to?----",
        name: "internsSchool"
    },

])

    .then(function (data) {
        const internsName = data.internsName
        const idNumber = data.idNumber
        const email = data.email
        const internsSchool = data.internsSchool
        const teamMember = new Intern(internsName, idNumber, email, internsSchool)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
};

// Put team together in html using template literals 

function completeTeam() {
    console.log('----Your team is now ready to role!----')

    const htmlArray = []
    const htmlStart = `

    <!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${finalTeamArray[0]}</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    />
    <link rel="stylesheet" href="../main/style.css" />
    <style>
    ${style}
  </head>
  
  <body>
    <section class="section">
      <div class="container">
        <h1 class="title">${finalTeamArray[0]}</h1>
      </div>
      
    </section>
    <div class='container has-text-centered'>
      <div class='columns is-mobile is-centered'>
        <div class='column is-3 m-5'>
          <div class="card">
            <div class="card-content">
              <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='column is-3 m-5'>
          <div class="card">
            <div class="card-content">
              <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='column is-3 m-5'>
          <div class="card">
            <div class="card-content">
              <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='column is-3 m-5'>
          <div class="card">
            <div class="card-content">
              <ul>
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>

    
    
    
    
    
    `



}