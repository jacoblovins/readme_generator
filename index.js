const fs = require("fs");
const inquirer = require("inquirer");

const userAnswers = [
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
]

function userInput(getAnswers, badge) {

    return `# ${getAnswers.title}
    
    
![License](https://img.shields.io/badge/License-${badge}-blue.svg)

## Description

${getAnswers.description}


## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contribution Guidelines](#contribution-guidelines)

*[Tests](#tests)

*[Questions](#questions)



## Installation

To install necessary dependencies, run the following command:

\`\`\` ${getAnswers.installation} \`\`\`



## Usage

${getAnswers.usage}



## License

This project is licensed under the ${getAnswers.license} license.



## Contribution Guidelines

${getAnswers.guidelines}



## Tests

To run tests, run the following command:

\`\`\` ${getAnswers.test} \`\`\`



## Questions

If you have any further questions, you can reach me directly here: ${getAnswers.email}

You can find more of my work at [https://github.com/${getAnswers.username}/](https://github.com/${getAnswers.username}/).
`
}

async function createReadme() {
    try {
        const getAnswers = await inquirer.prompt(userAnswers);
        const badge = await getAnswers.license.split(' ').join('%20');
        const fileName = await getAnswers.title.toLowerCase().split(' ').join('') + "_README.md";
        const createFile = await userInput(getAnswers, badge);
        fs.writeFile(fileName, createFile, function (err) {
            if (err) {
                console.log(err);
            }
            console.log("Your README has been created!")
        });
    } catch (error) {
        console.log(error)
    }
}
createReadme()