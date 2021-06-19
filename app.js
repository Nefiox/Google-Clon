const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'))

app.get('/', (req, res) => res.sendFile('/index.html', {root: '/'}));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));