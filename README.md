# Loc8r Application
##### Jad Alrehaoui

### MEAN Stack

First let's start with the server configuration.
For this application I am using Express as the server.

We need 
- npm 
- node
- express
- nodemon 

(for now...)

## Installation

- ### NPM, node and Express

Let's start with the installation of npm which can be downloaded jointly with node from 

-> [Download for mac here.](https://nodejs.org/dist/v18.14.2/node-v18.14.2.pkg)


-> [Download for windows here.](https://nodejs.org/dist/v18.14.2/node-v18.14.2-x86.msi)

Then open the terminal and type 
``` npm --version ``` to see if it was installed you should get something like 9.5.0


Now we want to install express-generator to create an express server for us

``` npm install -g express-generator``` or ```sudo npm install -g express-generator```

Once done, navigate to the directory where you want to create a new express project and run
```express -view=pug --git myapp```

This will create a new folder and place all the generated files inside. 

Note: We are generating a project that has views as pug files, if we don't specify the view type we will get views in jade format. 

navigate to the directory and run ```npm install``` to install all the libs in the package.json
- ### Nodemon
to start the application ```npm start``` but this will not have auto-save on for that reason we need nodemon 
```sudo npm install -g nodemon``` 

Now to run the application with hot-reload, run the following command in the project dir: ```nodemon``` 







