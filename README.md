# The Office Trivia

# The Office Trivia
A fun trivia game based on the TV series The Office.
 
 ## Installation
Prerequisites

 Operating System: JavaScript, VS Code, and GitHub are compatible with multiple operating systems including Windows, macOS, and Linux.  Ensure that your operating system meets the requirements for these tools.  

 Node.js: JavaScript is typically run using Node.js.  Make sure you have Node.js installed on your machine.  You can download the latest version of Node.js from the official website [Node.js](https://nodejs.org)
 and follow the installation instructions specific to your operating system.

 Text Editor: VS Code is a popular text editor for JavaScript development.  You can download VS Code from the official website [VS Code](https://code.visualstudio.com)
 and follow the installation instructions for your operating system. 

 Git: Git is a version control system used to clone and manage code repositories hosted on platforms like GitHub.  Install Git on your machine by downloading it from the official website[Git](https://git-scm.com)
 and follow the installation instructions for your operating system.
 Once you have these prerequisites in place, you should be ready to start coding with JavaScript using VS Code and collaborating with others using GitHub.  

 Cloning the Project
 To clone the project from GitHub:
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Go to the GitHub repository page of the project you want to clone.
4. Click on the "Code" button and copy the HTTPS or SSH link.
5. In your terminal, run the following command:

git clone <repository-url>

Replace <repository-url> with the link you copied from GitHub.
6. Press Enter to execute the command. The project will be cloned to your local machine.

Installing Dependencies
To install dependencies using npm:
1. Open your terminal or command prompt.
2. Navigate to the root directory of your project (where the package.json file is located).
3. Run the following command to install all the dependencies listed in the package.json file:

npm install

npm will fetch all the required dependencies and install them in a node_modules directory within your project.

Setting up JSON Server
To install JSON Server:
1. Make sure you have Node.js and npm installed beforehand.
2. Open your terminal or command prompt.
3. Run the following command to install JSON Server globally:

npm install -g json-server

This command will install JSON Server globally on your machine, making it accessible from any directory.
4. Wait for the installation to complete. Once it's done, you should see a success message.

To start a JSON Server:
1. Open your terminal or command prompt.
2. Navigate to the directory where your db.json file is located.
3. Run the following command to start the JSON server:

json-server --watch db.json

This command will start the JSON server and watch the db.json file for changes.
4. The JSON server will now be running at a specified URL (often http://localhost:3000) and you can make HTTP requests to it to interact with the data in the db.json file.

Note: JSON Server is typically used for development and testing purposes, and it's not suitable for production applications. In a production environment, you would typically use a real database and configure the necessary database connections.

## Conclusion

Congratulations! You have successfully completed the installation process for The Office Trivia project. By following these steps, you should now have all the necessary software and dependencies set up on your machine.

You have installed Node.js, set up VS Code as your text editor, and installed Git for version control. Additionally, you have cloned the project from GitHub and installed the required dependencies using npm. Lastly, you have set up JSON Server to mock the API and serve data from the JSON file.

With everything in place, you are now ready to start coding and exploring The Office Trivia project. Have fun and enjoy the journey of developing your trivia game based on the popular TV series!

If you have any questions or run into any issues during the installation process, don't hesitate to reach out for assistance. Happy coding!   