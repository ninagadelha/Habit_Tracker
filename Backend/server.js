const express = require('express');
const app = express();
const port = 3000;

//middleware to parse POST request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//hardcode "users" for testing
const users = [
    { username: "admin", password: "1234" },
    { username: "test", password: "abcd "}
];

//serve frontend files
app.use(express.static('../frontend'));

//login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

   if(user){
    res.json({ success: true, message: "Login successful!" });
   } 
   else{
    res.status(401).json({ sucess: false, message: "Invalid username or password."});
   }
});

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
});