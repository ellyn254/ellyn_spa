const express = require ('express')
const mysql = require ('mysql')
const jwt = require('jsonwebtoken')
const cors = require ('cors') //enables us access our backend APIs from frontend


const app = express();
app.use(express.json());//used to pass data to payload
app.use(cors());

const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huZG9lIiwiaWF0IjoxNjg0NDg4NjYzfQ.v2MNdqsxtYjwHnrcwno3tTc-g64u1piVdEpCsRNNz4w';

//create a database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Ellyn@2024",
    database: "spa"
})

//FETCH API
app.get('/', (req, res) => {
    const sql="SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error")
        return res.json(data)
    })
})

//REGISTER API
app.post('/register', (req, res) => {
    //create sql statements
    const sql = "INSERT INTO users (`name`, `phone`, `email`, `password`) VALUES (?)";
    //to get the values we write the below code
        const values = [
            req.body.name,
            req.body.phone,
            req.body.email,
            req.body.password
        ]
        db.query(sql, [values], (err, data) => {
            if(err) {
                return res.json("Error");
             } 
                return res.json(data);
        })
        
    })

      //LOGIN API
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password`= ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
            if (err) {
                return res.json({Error:"Error"});
            }
            if (data.length >0) {
                return res.json({Status:'Login successful'})
            }else {
                return res.json({Message:'No record'});
            }
    })
})

    //UPDATE API
    app.put('/update/:id', (req, res) => {
        //create sql statements
        const sql = "UPDATE users SET name=?, phone=?, email=?, password=? WHERE id=?";
        //to get the values we write the below code
            const values = [
                req.body.name,
                req.body.phone,
                req.body.email,
                req.body.password
            ]

            //to get the id we write the below code
            const id = req.params.id;
            db.query(sql, [...values, id], (err, data) => {
                if(err) {
                    return res.json("Error");
                 } 
                    return res.json(data);
            })
            
        })

        //DELETE API
    app.delete('/user/:id', (req, res) => {
        //create sql statements
        const sql = "DELETE FROM users WHERE id = ?";
    
            //to get the id we write the below code
            const id = req.params.id;
            db.query(sql, [id], (err, data) => {
                if(err) {
                    return res.json("Error");
                 } 
                    return res.json(data);
            })
            
        })

  
//run the server
app.listen(8081, () => {
    console.log("Listening ...");
})

