require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      { SERVER_PORT, CONNECTION_STRING } = process.env,
      app = express(),
      cors = require('cors'),
      port = SERVER_PORT,
      ctrl = require('./controller');

app.use(express.json());
app.use(cors());

//ENDPOINTS

app.get('/api/inventory', ctrl.getProductList);
app.post('/api/product', ctrl.addProduct);
app.delete('/api/product/:id', ctrl.deleteProduct);


massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('db connected');
  app.listen(port, () => {
    console.log(`Server started on ${port}`);
  })
})




