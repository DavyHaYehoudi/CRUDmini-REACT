# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `Serveur local`
Installer JSON-SERVER : `npm i -g json-server`

Faire tourner le back : `json-server --w src/db.json --port 3003`

Ajouter dans les scripts du package.json :

"server": "json-server --w src/db.json --port 3003"
Puis `npm run server`