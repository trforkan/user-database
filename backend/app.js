const express=require("express");

const mongoose =  require("mongoose");

const app = express();

const cors = require("cors");

require("dotenv/config");

app.use(express.json());

app.use(cors());
app.options('*', cors());

const userRoutes = require("./routers/users");

app.use("/users",userRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'users-database'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((error)=> {
    console.log(error);
})



app.listen(3000,()=>{
    console.log("server is running");
})

