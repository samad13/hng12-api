const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

app.use(cors({
    origin: 'localhost:5173',
}));


app.get('/', (req, res) => {
    const email = 'yusufabdulsamad93@gmail.com'; 
    const current_datetime = new Date().toISOString(); 
    const github_url = 'https://github.com/samad13/hng12-api'; 

    const response = {
        email,
        current_datetime,
        github_url,
    };

    res.status(200).json(response);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});