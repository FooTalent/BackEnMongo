const express = require('express');
const { connectionDB } = require('./database/db');
const { routerUser } = require('./routes/user.routes');
const cors = require('cors')

const app = express()

app.use(cors())

connectionDB();

app.use(express.json())

app.use('/api/user', routerUser )

app.listen(4001, ()=> {
    console.log('servidor iniciado');
})