const express = require('express');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post('/sieve',(req,res)=>{

})
