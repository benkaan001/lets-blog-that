// npx nodemon server.js

const express = require('express');
const routes = require ('./controllers');
const sequelize = require('./config/connection');

// add path to make css availabe to the client
const path = require('path');

// add Handlebars

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true }));

// add Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//turn on routes

app.use(routes);

// serve public files as static assets

app.use(express.static(path.join(__dirname, 'public')));

// turn on connection to db and server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log
    (`  \n---------------------\n Now listening on ${PORT} \n---------------------`));
});