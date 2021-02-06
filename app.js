const express = require('express'),
    router = require('./routes/routes');

require('dotenv').config();
const app = express();
const port = (process.env.PORT || 3001);

app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'pug')

app.use(router)

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`app listening at http://localhost:${port}/`);
    }
})