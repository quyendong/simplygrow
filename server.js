const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const flash = require('connect-flash');
const cors = require('cors');
const crypto = require('crypto');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'quyen',
  database : 'simplygrow'
});

//start mysql connection
 connection.connect(function(err) {
    if (err) throw err
      console.log('You are now connected...')
 });

// Initialize the app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(cors());


app.get('/PlantList', function (req, res) {
    connection.query('SELECT * FROM mainplantdatabase', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

// Start the server
app.listen(4000, () => {
 console.log('Server is running.');
});
