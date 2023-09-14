require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const routerApi = require('./routes');

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('MediConnect');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
