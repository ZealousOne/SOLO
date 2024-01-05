import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
// import { useId } from 'react';
// app.js
const express = require('express');
const path = require('path');
const app = express();

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
