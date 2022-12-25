const express =  require('express');
const fs =  require('fs').promises;
const path =  require('path');


const app = express();

const dataFile = path.join(__dirname, "data.json");

app.listen(3000, ()=> console.log("Server is running"));