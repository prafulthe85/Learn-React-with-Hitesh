# 🚀 Learn React with Hitesh

## Publish the Project on GitHub

- Create a new repository
- Now come to your terminal at the project location and run some commands:
  - `git init`
  - `git add Readme.md` (Create a readme file and add)
  - `git commit -m "Initial Message"`
  - `git branch -M main`
  - `git remote add origin https://github.com/prafulthe85/Learn-React-with-Hitesh.git`
  - `git push -u origin main`

---

## Create Project

- `npx create-react-app app_name` (This will take time)
- `npm create vite@latest` (takes less time)
  - Use `npm i` first to install packages
  - Run `npm run dev` to start the app

### Notes for Vite:

- You have to name the files `.jsx` instead of `.js`, as it throws errors otherwise.
- Always export and create components with **Capital Letters**.

---

## Install Tailwind in Folder

Run the following commands in your project:

- `npm install tailwindcss @tailwindcss/vite`
- Change the `vite.config.js` file by importing Tailwind CSS and calling it in the plugin:

  ```javascript
  import tailwindcss from "@tailwindcss/vite";

  plugins: [react(), tailwindcss()],
  ```

- In `index.css` add

  ```css
  @import "tailwindcss";
  ```

- Also add below in `eslint.config.js` file to remove red warning for unused variables

  ```css
  "no-unused-vars":"warn", ;
  ```
