// const express = require('express'); 
// const app = express(); 
// const PORT = 3000; 

// app.get('/', (req, res)=>{ 
// 	res.status(200); 
// 	res.send("Welcome to root URL of Server"); 
// }); 

// app.listen(PORT, (error) =>{ 
// 		if(!error) 
// 		console.log(`Server is Successfully Running on PORT ${PORT}`); 
// 		else
// 		console.log("Error occurred, server can't start", error); 
// 	} 
// ); 

// app.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
