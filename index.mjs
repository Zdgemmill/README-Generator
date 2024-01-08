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

    // Create README content
    const readmeContent = `
# ${data.title}

## Description
${data.description}

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
