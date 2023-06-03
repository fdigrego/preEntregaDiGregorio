# Marco general

## Iniciar Vite project with React

1. npm create vite@latest my-project -- --template react
1. cd my-project
- npm run dev levanta el servidor **localhost:5173** 
- CTRL-C stop servidor

## Install git hub pages

1. Sirve para automatizar la publicacion del proyecto _**en una rama**_ git hub pages
- npm i gh-pages -D
1. Crear repositorio en git hub
   - saltar al punto 2
   - copiar los comandos git remote ..., git branch y git push (los que estan al medio)
2. en la terminal: git init
3. en la terminal: git add .
4. en la terminal: git commit -m "1st commit"
5. git push
6. _**ejecutar en la terminal los comando del punto 1**_
7. Copiar el nombre del repositorio en **vite.config.js**
  - agregar despues de plugins, base: **"/repositorio/"**
8. en **package.json** agregar la sigueinte linea
 - "deploy": "gh-pages -d dist"
 - agregando una coma al comando anterior!
 - npm run build
 - npm run deploy
9. Veremos en github la pagina publicada en github

## Instalacion de Tailwind

1. npm install -D tailwindcss postcss autoprefixer
1. npx tailwindcss init -p

## Configuraciones

1. change tailwind.config.js
- /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
1. change index.css in **/src folder**
   - @tailwind base;
   - @tailwind components;
   - @tailwind utilities;


## Plugins de vscode

- **Tailwind CSS Intellisense**
- **PostCSS Languaje Support**

### Tailwinds _cheatsheet_

https://tailwindcomponents.com/cheatsheet/

## Develop

npm run dev