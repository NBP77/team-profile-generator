const inquirer = require('inquirer');
const fs = require('fs');
// const style = require("../main/style.css")

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let finalTeamArray = []

function startPrompt() {
  inquirer.prompt([
    {
        message: "Please write your team name:",
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
  inquirer.prompt([
      {
          type: "list",
          message: "Would you like to add more team members?",
          choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
          name: "addMemberData"
      }
  ])

      .then(function (data) {

          switch (data.addMemberData) {
              case "Yes, add an engineer":
                  addEngineer();
                  break;

              case "Yes, add an intern":
                  addIntern();
                  break;
              case "No, my team is complete":
                completeTeam();
                  break;
          }
      });
}



// add manager

function addManager() {
    inquirer.prompt([
        {
        message: "----What is your Managers name?----",
        name: "name"
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
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
};



// add engineer

function addEngineer() {
    inquirer.prompt([
        {
        message: "----What is your Engineers name?----",
        name: "name"
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
        
        message: "----What is your Engineers GitHub Username?----",
        name: "github"
    },

])

    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        finalTeamArray.push(teamMember)
        addTeamMembers();
    });
};

// add intern

function addIntern() {
    inquirer.prompt([
        {
        message: "----What is your Interns name?----",
        name: "name"
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
        message: "----What school did your Intern go to?----",
        name: "school"
    },

])

    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
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
                    <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
                  </ul>
                </div>
              
            </div>
            `
    
            if (finalTeamArray[i].officeNumber) {
              object += `
              <p>Office Number: ${finalTeamArray[i].officeNumber}</p>
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

