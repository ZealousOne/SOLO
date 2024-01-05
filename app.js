import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useId } from 'react';
// app.js
const express = require('express');
const path = require('path');
const app = express();


// app.use(express.static(path.join(__dirname, 'dist')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// added this to try and get something react to display

const App = () => {


  return (
    <div>
      <h1>test</h1>
      {/* <Box boxState={boxState}boxState={boxState} handleClick={updateState}/> */}
      <Row/>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />,);
