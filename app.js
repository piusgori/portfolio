const express = require('express');
const bodyParder = require('body-parser');
const path = require('path');

const mainRoute = require('./routes/main-route');

const app = express();

app.use(bodyParder.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoute);

app.listen(process.env.PORT || 3000)