const express = require('express');
const people = require('./people.json');

const app = express();

app.set('view engine', 'pug');

//server static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: "Meine ur-leiwande Lebenslauf-Webseite",
    people: people.profiles
  })
})

const server = app.listen(7000, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
