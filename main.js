const express = require('express');
const app = express();
const router = require('./urls.js');



app.use(express.json());
app.use(router);



const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});


