const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json());

app.get('/finishGame', (req, res) => {
  let data = { test: 'asdf'};
  res.status(200);
  res.send(JSON.stringify(data));
})

app.get('/getText', (req, res) => {
  let data = {};
  res.status(200);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
