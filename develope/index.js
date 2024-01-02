const fs = require('fs');
const inquirer = require('inquirer');

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
                name: 'installation-instructions',
            },
            {
                type: 'input',
                message: 'Please enter usage information.',
                name: 'usage-information',
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
        ])
        .then((response) =>
            response.confirm === response.password
                ? console.log('Success!')
                : console.log('You forgot your password already?!')
        );
}  