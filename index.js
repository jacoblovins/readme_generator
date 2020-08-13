const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
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
];

// function to write README file
function writeToFile(fileName, createFile) {
    fs.writeFile(fileName, createFile, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Your README has been created!");
    });
}

// function to initialize program
async function init() {
    try {
        const getAnswers = await inquirer.prompt(questions);
        const fileName = await getAnswers.title.toLowerCase().split(' ').join('') + "_README.md";
        const createFile = await generateMarkdown(getAnswers);
        const writefile = await writeToFile(fileName, createFile);
    } catch (error) {
        console.log(error);
    }
}
init();