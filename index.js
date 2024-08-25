const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets
        .filter(item => item === item.toLowerCase())
        .sort()
        .pop() || "";

    res.json({
        is_success: true,
        user_id: "vishnu_kannabiran_290504",
        email: "vishnu.kannabiran2021@vitstudent.ac.in",
        roll_number: "21BDS0073",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
