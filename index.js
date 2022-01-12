const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
// const csurf = require("csurf");
const app = express();



app.use(cors());
app.use(express.json());




mongoose.connect('mongodb://localhost:27017/RoxilerTodo',{ useNewUrlParser: true,
useUnifiedTopology:true,
}).then(()=>{
console.log("CONNECTION OK")
})
.catch(err=>{
console.log("NOT CONNECTED")
console.log(err)
});



//  gfor todo nd user routes

// const userdata = require('./routes/user');
// const tododata = require('./routes/todo');

// app.use("/api" , userdata);
// app.use("/api/todo" , tododata);

// const userControls = require('./controllers/user');

// const todoControls = require('./controllers/todo');

// app.get("/get" , userControls.find);
// app.post("/create" , userControls.create);
// app.get("/getall" , userControls.getAllTodo);
// app.post("/todo/create" , todoControls.create);

app.use(require('./routes/routes'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));