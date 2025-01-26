To start the project and publish on GitHub, Follow the steps:

- Create a new repository
- Now come to your terminal at project location and run some commands
- git init
- git add Readme.md(Create a readme file and add)
- git commit -m "Initial Message"
- git branch -M main
- git remote add origin https://github.com/prafulthe85/Learn-React-with-Hitesh.git
- git push -u origin main

Create project

- npx create-react-app app_name (This will take time)
- npm create vite@latest (takes less time) -> use npm i first to install packages first in this case (npm run dev) to start the app

## In vite you have to name the files .jsx not .js, it throws error

## Always export and create componets with Capital Letter

# Install Tailwind in folder

Run the following commands in your project

- npm install tailwindcss @tailwindcss/vite
- change the vite.config.js file by importing tailwindcss and calling in plugin
  - import tailwindcss from "@tailwindcss/vite";
  - plugins: [react(), tailwindcss()],
- In index.css add @import "tailwindcss";

# Also add below in eslint.config.js file to remove red warning

      "no-unused-vars": "warn",
