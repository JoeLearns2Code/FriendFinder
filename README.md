# FriendFinder

Friend Finder is a friend matching app that matches the user with the most eligible friend based on responses to a series of 10 statements.  The user rates each statement on a scale of 1-5, with 1 indicating strong disagreement and 5 indicating strong agreement.  

An existing user with the closest responses(i.e. the user with the lowest difference in value for all statements combined) will be selected as the best match.


## Getting Started

FriendFinder is deployed via Heroku.  A direct link for the Heroku can be found here: https://jl2cfriendfindapp.herokuapp.com/

Files and other information can be found on GitHub here: https://github.com/JoeLearns2Code/FriendFinder

### Prerequisites

The data can be pulled directly from GitHub via GitBash on PC or via Terminal on Mac.  If you are new to this process, please follow the directions below:

When you have accessed the repository page on GitHub, you may simply download a Zip file and extract it to a directory of your choosing.  Alternatively, you may download the data directly to your device via GitBash if you have an SSH key.  More on adding an SSH key can be found here: https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account

To download via GitBash, once you have a working SSH key with GitHub, create a folder you wish to download data into.  Next, click on the green 'Download or Clone' button on the GitHub respoitory page.  Make sure you have SSH key selected(and not HTTPS), and click on the clipboard icon.  This copies the address to your clipboard.

Next, navigate to the folder you wish to download the data into via GitBash or Terminal, and then simply type "git clone" followed by the link you copied onto your clipboard(paste via ctrl/cmd+v).  Press the enter key, and GitBash will pull the entire repository into your folder.

Additionally, you will need to have Node.js installed.  This can be done here: https://nodejs.org/en/


### Installing

Once you have the repository cloned, you will need to install a number of npm packages before you can begin using the program.  

Begin with adding a folder for node_modules by typing the following in the command line: npm init -y

Next you will need to install each package used for Friend Finder.  This can be done by typing each of the following into the command line:

* npm install
* npm install express
* npm install path

It is also highly reccomended to have nodemon installed.  This is a global package which can be installed as follows:

* npm install -g nodemon


## Instructions

Navigate to the folder location where the server.js found in the console.  Type "nodemon server.js" in the command line.  You should receive a message that it is now listening on port 3000.  If you wish to change this port, you will need to adjust this in the server.js file.

In your browser, navigate to localhost:3000(or whichever port you chose).  You should now see the main page for Friend Matrix.  Click on the 'Down the Rabbit Hole' button to reach the survey page.  

On the survey page, enter your name and a link to an image that you would like to use.  Then proceed to answer your level of agreement/disagreement over a series of ten statements, with 1 indicated you strongly disagree and 5 indicating you strongly agree.

Once this is done, click the submit button to find out who your best friend match will be.


## Testing

HTML files can be validated here: https://validator.w3.org/#validate_by_input

The API & routing aspects of this program can be tested through use of the command console(GitBash/Terminal, etc.).  Simply add console.log under any section you wish to examine the results from in the console.
  


## Deployment

Navigate to https://github.com/ to clone.  Carefully follow the installation instructions above.


## Built With

Visual Studio Code: https://code.visualstudio.com/  
Node.js: https://nodejs.org/en/
Heroku: https://dashboard.heroku.com

## Contributing

Feel free to fork the repository for your own study.  If you would like to learn more about how I constructed this project you may also message me via GitHub.


## Versioning

Use github for version control (https://github.com/your/project/tags).


## Author

* **Joe Hutchinson**


## Acknowledgments
 
* Joe Rehfuss
* Trae Shanks
* Lan Truong

Thank you again to my Coding Boot Camp instructors for all of the support and constructive feedback.