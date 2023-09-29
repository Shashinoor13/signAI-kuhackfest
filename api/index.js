const express  = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

var testAPIRouter = require('./routes/testApi')
var modelAPI = require('./routes/send')

const app = express()
app.use(cors())
app.set('port', PORT)


app.use("/testAPI", testAPIRouter);
app.use("/model", modelAPI);

app.listen(app.get('port'), () => {
    console.log(`[SERVER] http://localhost:${app.get('port')}`)
}
);