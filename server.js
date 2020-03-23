const express = require('express');
const cors = require('cors')
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/pet.routes')(app)

const server = app.listen(8000, ()=>{
    console.log("Listening at port 8000")
})

// const io = require("socket.io")(server);
