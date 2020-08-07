const fs = require("fs");
const inquirer = require("inquirer");

async function createReadme() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Title:",
                name: "title"
            },
            {
                type: "input",
                message: "Description:",
                name: "description"
            },
            {
                type: "input",
                message: "Installation Instructions:",
                name: "installation"
            },
            {
                type: "input",
                message: "Usage Information:",
                name: "usage"
            },
            {
                type: "input",
                message: "License:",
                name: "license"
            },
            {
                type: "input",
                message: "Contribution Guidelines:",
                name: "guidelines"
            },
            {
                type: "input",
                message: "Test Instructins:",
                name: "test"
            },
            {
                type: "input",
                message: "GitHub Username:",
                name: "username"
            },
            {
                type: "input",
                message: "Email Address:",
                name: "email"
            }
        ])
        .then(function (response) {

            const fileName = response.title.toLowerCase().split(' ').join('') + "_README.md";

            // const upperName = response.name.charAt(0).toUpperCase() + response.name.slice(1)

            const userInput =
                `# ${response.title}
        

## Table of Contents

-[Description](#description)

-[Installation](#installation)

-[Usage](#usage)

-[Contribution Guidelines](#contribution-guidelines)

-[Tests](#tests)

-[Questions](#questions)

## Description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## Contribution Guidelines

${response.guidelines}

## Tests

${response.test}

## Questions

${response.username}

${response.email}
`

            fs.writeFile(fileName, userInput, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Success!")
            })
        })

}
createReadme();