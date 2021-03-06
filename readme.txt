How to set up tailwindcss

First of all we will need to download nodejs since we will be using npm which is "node package manager"
to install dependencies for our project just like we use composer for PHP or Laravel.

after that we create a new project by opening a terminal and then typing npm init. Now this command
initializes the node package manager just like we do with git on a project.

secondly we stall tailwindcss by running 'npm install tailwindcss -y' which will install a node_modules 
folder on our project root.

now we have to set up our project properly so we need to create two folders on our project root, one named
'src' and the other named 'public. This folders will be used to serve our project properties for use.

On the src folder create a styles.css folder and the add the tailwind utility style scripts below
@tailwind base;
@tailwind components;
@tailwind utilities;

Open your package.json file where all our project dependencies are registered, go on the "script" object
line, clear whatever is there and then replace it with the line of code below
 "build-css": "tailwindcss build src/styles.css -o public/styles.css"
What this line of code is saying is that we want to build the css script file and we want the root to be 
src/styles.css and then the -o(output base) to be in the public/styles.css which will be created when we run
 npm run build-css on the terminal.

Now we can create an index.html file on the pulic folder. link our css and the serve our utility classes
on the project.

Now for our custom classes we need to instantiate a tailwind.config.js file by running
 npx tailwindcss init --full //which will generate a tailwind.config.js file on our root folder.

now we can change or introduce new custom objects and then run
 npm run build-css to update our script file before using our classes on the html file.

This tailwind.config.js file actually comes with the rest of the default configurations, but if you
intend to instantiate an empty config file without any default value(s) then we can either delete or
rename the initial config file and then run
 npx tailwindcss init // without the --full statement, this will create an empty config file

 CUSTOM SELECTOR FOR REUSABLE COMPONENTS
 @apply
