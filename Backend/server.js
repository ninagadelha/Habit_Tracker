const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//temporary
const users = [
    { username: 'admin', password: '1234' },
    { username: 'user1', password: 'abcd'}
];

//login route
app.post('/login', (req,res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        res.json({ sucess: true, message: 'Login successful!' });
    }
    else{
        res.status(401).json({ sucess: false, message: 'Invalid username or password. '});
    }
});

//start server
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});