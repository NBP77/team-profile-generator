const inquirer = require('inquirer');
const fs = require('fs');
// const style = require('./main/css.style')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let finalTeamArray = []

function startPrompt() {
  inquirer.prompt([
    {
        message: "Welcome to Team Generator 5000! Please write your team name:",
        name: "teamname"
    }
])
    .then(function(data){
        const teamName = data.teamname
        finalTeamArray.push(teamName)
        addManager();
    })


}

function addTeamMembers() {
addEngineer();
addIntern();
completeTeam();
}



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
        name: "id"
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
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(managerName, id, email, officeNumber)
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
        name: "id"
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
        const id = data.id
        const email = data.email
        const githubUsername = data.githubUsername
        const teamMember = new Engineer(engineersName, id, email, githubUsername)
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
        name: "id"
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
        const id = data.id
        const email = data.email
        const internsSchool = data.internsSchool
        const teamMember = new Intern(internsName, id, email, internsSchool)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
};

// Put team together in html using template literals 

function completeTeam() {
    console.log('----Your team is now ready to role!----')

    const htmlArray = []
    const htmlStart = 

    `
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
        </style>
      </head>
    
      <body>
        <section class="section">
          <div class="container">
            <h1 class="title">${finalTeamArray[0]}</h1>
          </div>
        </section>
    
        <div class='container has-text-centered'>
          `
          htmlArray.push(htmlStart);
    
          for (let i = 1; i < finalTeamArray.length; i++) {
            let object = `
            
          <div class='columns is-mobile is-centered'>
            <div class='column is-3 m-5'>
              <div class="card">
                <div class="card-content">
                  <ul>
                    <li>${finalTeamArray[i].name}</li>
                    <li>${finalTeamArray[i].title}</li>
                    <li>ID: ${finalTeamArray[i].id}</li>
                    <li>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            `
    
            if (finalTeamArray[i].officeNumber) {
              object += `
              <p>${finalTeamArray[i].officeNumber}</p>
              `
            }
            if (finalTeamArray[i].github) {
              object += `
              <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}">${finalTeamArray[i].github}</a></p>
              `
            }
            if (finalTeamArray[i].school) {
              object += `
              <p>School: ${finalTeamArray[i].school}</p>
              `
          }
          object += `
          </div>
          </div>  
          `
          htmlArray.push(object)
          }
    
          const htmlEnd = `
        </div>
      </body>
    </html>
    `
    
    htmlArray.push(htmlEnd);
    
    fs.writeFile(`./generated-html/${finalTeamArray[0]}.html`, htmlArray.join(""), function (err) {
            
      })
    
    }
    
    startPrompt()

