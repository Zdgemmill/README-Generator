import fs from 'fs';
import inquirer from 'inquirer';
//questions for user
function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Please provide a description of your project.',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Please enter any installation instructions.',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Please enter usage information.',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Please enter any contributors that are working on the project.',
                name: 'contributors',
            },
            {
                type: 'list',
                message: 'Choose a license:',
                choices: ['MIT', 'Apache', 'GPL', 'Other', 'None'],
                name: 'license',
            },
            {
                type: 'input',
                message: 'please enter any test instructions:',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'Please enter your GitHub username:',
                name: 'github-Username',
            },
            {
                type: 'input',
                message: 'Please enter your email:',
                name: 'email',
            },

        ])
        .then((response) =>
            generateReadme(response)

        );
}

function generateReadme(data) {
    const filename = 'README.md';
    const licenseBadges = {
        MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        Other: 'Custom badge for Other license',
        None: 'No license selected',
    };

    const selectedLicenseBadge = licenseBadges[data.license];


    // Create README content
    const readmeContent = `
# ${data.title}

# ${selectedLicenseBadge}

## Description

# ${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributors](#contributors)
4. [License](#license)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## License
This project is licensed under the ${data.license} License.

## Tests
${data.tests}

## Questions
For questions about this project, please contact ${data['github-Username']} at ${data.email}.
`;

    fs.writeFile(filename, readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${filename} successfully generated!`);
        }
    });
}
promptUser();
