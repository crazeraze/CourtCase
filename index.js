import express from 'express';
import bodyParser from 'body-parser';

const port=3000;
const app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("home");
    });

app.get("/login", (req, res) => {
    res.render("login");
    });

app.get("/register", (req, res) => {
    res.render("register");
    });

app.post("/register",(req,res)=>{
    const {modeselect,username,email,phone,dob,gender,state,countrya,district,password}=req.body;
    console.log(req.body);
})

    app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  