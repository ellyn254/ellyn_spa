const express = require ('express')
const mysql = require ('mysql')
const cors = require ('cors')


const app = express();
app.use(express.json());//used to pass data to payload
app.use(cors());

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



        //LOGIN API
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password`= ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length >0) {
            return res.json("Success")
            // const id = data[0].id;
            // const token = jwt.sign({id}, "jwtSecretKey", {expiresIn:300});
            //         return res.json({Login: true, token, data});
        } else {
            return res.json("Failed")
        }
        })
    })

//run the server
app.listen(8081, () => {
    console.log("Listening ...");
})

