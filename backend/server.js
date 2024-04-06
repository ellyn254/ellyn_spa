const express = require ('express')
const mysql = require ('mysql')
const cors = require ('cors')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')
const cookieParser = require ('cookie-parser')
//const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//create a database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Ellyn@2024",
    database: "spa"
})


//create a register API
app.post('/register', (req, res) => {
    //create sql statements
    const sql = "INSERT INTO users (`name`, `phone`, `email`, `password`) VALUES (?)";
    //bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
       // if(err) return res.json({Error: "Error in hashing password"});
        const values = [
            req.body.name,
            req.body.phone,
            req.body.email,
            req.body.password
        ]
        db.query(sql, [values], (err, _result) => {
            if(err) {
                return res.json({Error: "Data insertion error"});
             } else{
                 res.send({Status: "Success"})}
        })
        
    })
    
//})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if (err) return res.json({Error: "Login error"});
        if (data.length >0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "password comparison error"});
                if(response) {
                    return res.json({Status: "Success"})
                } else {
                    return res.json({Error: "password marching error"})
                }
            })

        }else {
            return res.json({Error: "No Email record"})
        }
    })
})
// *******************************************************************************************************************

// *************************************************************************************************************


//run the server
app.listen(8081, () => {
    console.log("Listening ...");
})