// function to generate markdown for README
function generateMarkdown(getAnswers) {

  // formatting the license string so it works in the badge link
  const badge = getAnswers.license.split(' ').join('%20');

  return `# ${getAnswers.title}
      
    
![License](https://img.shields.io/badge/License-${badge}-blue.svg)

## Description

${getAnswers.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Tests](#tests)
* [Questions](#questions)




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
`;
}

// make generateMarkdown function available to index.js
module.exports = generateMarkdown;
