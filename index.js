import express from 'express';
import bodyParser from 'body-parser';
import pg, { Client } from 'pg';

const port=3000;
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const db= new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'courtcase',
    password: 'Akshat',
    port: 5432,
});
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database', err);
    } else {
        console.log('Connected to the database');
    }
});


app.get("/", (req, res) => {
    const stats = {
        lawyers: 45,
        courtcases: 553,
        stationary: 1,
        clients: 3
      };
      res.render('home', { stats });
    
    });

app.get("/login", (req, res) => {
    res.render("login");
    });

app.get("/dashboard", (req, res) => {
    res.render("userdash");
    });

app.get("/register", (req, res) => {
    res.render("register");
    });


app.post("/register",(req,res)=>{
    const {enrollment,modeselect,username,name,email,phone,dob,gender,state,countrya,district,address,password}=req.body;
    console.log(req.body);
    if (modeselect === "other") {
        const insertquery='INSERT INTO users ( username,name, email, phone,dob,gender,country,state,district,address,password) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11)';
        db.query(insertquery,                [username,name,email,phone,dob,gender,state,countrya,district,address,password], (err, result) => {
            if (err) {
                console.error('Error inserting data', err);
                res.status(500).send('Error inserting data');
            } else {
                console.log('Data inserted successfully');
                res.redirect("/login");
            }
        });
    }
    if (modeselect === "Lawyer") {
        const insertquery='INSERT INTO lawyer (enrollment_no ,username,name, email, phone,dob,gender,country,state,district,address,password) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12)';
        db.query(insertquery,                [enrollment,username,name,email,phone,dob,gender,state,countrya,district,address,password], (err, result) => {
            if (err) {
                console.error('Error inserting data', err);
                res.status(500).send('Error inserting data');
            } else {
                console.log('Data inserted successfully');
                res.redirect("/login");
            }
        });
    }

















});

    app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  