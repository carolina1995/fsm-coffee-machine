const  express = require("express");
const cors = require("cors");

const app = express()
const port = 8080;

app.use(cors());

app.get('/getInitialState', (req, res) => {
  res.json({initialState: 'OFF'});
})

app.listen(port, () => {
  console.log(`Carolina's Coffee House API listening on port ${port}`)
})