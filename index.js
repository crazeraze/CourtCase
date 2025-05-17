import express from 'express';
import bodyParser from 'body-parser';

const port=3000;
const app = express();
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("home.ejs");
    });

app.get("/login", (req, res) => {
    res.render("login.ejs");
    });

app.get("/signup", (req, res) => {
    res.render("signup.ejs");
    });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  