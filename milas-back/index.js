const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`welcome page`);
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
