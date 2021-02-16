const express = require('express')
const bodyParser = require('body-parser')
const user = require('./app/models/user');
const registerRouter = require('./routes/register');
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
 
});

app.use('/', registerRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});