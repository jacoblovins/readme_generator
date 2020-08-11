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
            choices: ["MIT", "APACHE 2.0", "GPLv3", "BSD 3--Clause", "none"]
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
            const badge = response.license.split(' ').join('%20')

            const userInput =
                `# ${response.title}
        

![License](https://img.shields.io/badge/License-${badge}-blue.svg)
                
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

\`\`\` ${response.installation} \`\`\`



## Usage

${response.usage}



## License

This project is licensed under the ${response.license} license.



## Contribution Guidelines

${response.guidelines}



## Tests

To run tests, run the following command:

\`\`\` ${response.test} \`\`\`



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