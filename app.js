const express = require('express');
const mongoose = require('mongoose');
const keys = require('./private/keys');

const mainRoute = require('./routes/main-route');

const app = express();

const mongoUrl = `mongodb+srv://pius_gori:${process.env.MONGO_DB_PASSWORD || keys.mongoPassword}@piuscluster.wvoqx.mongodb.net/piuskimsey?retryWrites=true&w=majority`;

app.use(mainRoute);

mongoose.connect(mongoUrl).then(res => {
    app.listen(3000)
}
).catch(err => {
    console.log(err)
})