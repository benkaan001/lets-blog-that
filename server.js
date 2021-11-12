
// npx nodemon server.js
// add path to make css availabe to the client
const path = require('path');
const express = require('express');
const routes = require('./controllers');

// add handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ });



const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");



// add Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serve public files as static assets
app.use(express.static(path.join(__dirname, 'public')));



//turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log
    (`  \n---------------------\n Now listening on ${PORT} \n---------------------`));
});