const express= require("express");
const app= express();
const path= require("path");
const compression= require("compression");

//import the routes
const mainRoute= require("./routes/main");

const dev= app.get("env") !== "production"
const normalizePort= port => parseInt(port, 10);
const PORT= normalizePort(process.env.PORT || 5000);

if(!dev){
    
        app.disable("x-powered-by");
        app.use(compression());
         
    }



//set the public folder
app.use(express.static("./public"));
//find the folder views, where the "views" will be allocated
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");


//use the routes
app.use("/", mainRoute);


app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log("App waiting traffic @ localhost:5000");
});
