const express  = require('express')
const cors = require('cors')
const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

var testAPIRouter = require('./routes/testApi')
var modelAPI = require('./routes/send')
var dataAPI = require('./routes/data')
var letterAPI = require('./routes/letter-to-word')
var renderHtml = require('./routes/renderHtml')

const app = express()
app.use(cors())
app.set('port', PORT)
app.use(express.json())
app.use(bodyParser.json())

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));

app.use('/html',renderHtml);
app.use("/testAPI", testAPIRouter);
app.use("/model", modelAPI);
app.use('/data',dataAPI);
app.use('/learn',letterAPI);


app.listen(app.get('port'), () => {
    console.log(`[SERVER] http://localhost:${app.get('port')}`)
}
);