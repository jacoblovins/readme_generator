const fs = require("fs");
const inquirer = require("inquirer");

async function createReadme() {
    const getAnswers = await inquirer.prompt([
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
                name: "installation",
                default: "npm i"
            },
            {
                type: "input",
                message: "Usage Information:",
                name: "usage"
            },
            {
                type: "list",
                message: "License:",
                name: "license",
                choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
            },
            {
                type: "input",
                message: "Contribution Guidelines:",
                name: "guidelines"
            },
            {
                type: "input",
                message: "Test Instructins:",
                name: "test",
                default: "npm test"
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
            let badge;
            const badgeFunction = response => {
                if (response.license === "MIT") {
                    badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
                } else if (response.license === "APACHE 2.0") {
                    badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
                } else if (response.license === "GPL 3.0") {
                    badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
                } else if (response.license === "BSD 3") {
                    badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
                } else {
                    badge = "";
                }
            }
            badgeFunction(response);

            const userInput =
                `# ${response.title}
        

${badge}
                
## Description

${response.description}


## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contribution Guidelines](#contribution-guidelines)

*[Tests](#tests)

*[Questions](#questions)



## Installation

To install necessary dependencies, run the following command:

${response.installation}



## Usage

${response.usage}



## License

This project is licensed under the ${response.license} license.



## Contribution Guidelines

${response.guidelines}



## Tests

To run tests, run the following command:

${response.test}



## Questions

If you have any further questions, you can reach me directly here: ${response.email}

You can find more of my work at [https://github.com/${response.username}/](https://github.com/${response.username}/).
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