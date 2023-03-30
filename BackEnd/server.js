const express = require('express')
const cors=require('cors')
const Users = require('../src/components/config-2.jsx')
const db = require('../src/components/config-2.jsx')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/create', (req, res) => {
    db.ref('data').once('value', (snapshot) => {
      const data = snapshot.val();
      res.json(data);
    });
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });