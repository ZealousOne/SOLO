import { createRoot } from 'react-dom/client';
// const createRoot = require('react-dom/client');
// Clear the existing HTML content
import React from 'react';
import ReactDOM from 'react-dom';
console.log('inside index.js');
const App = () => <h1>Hello, world</h1>;

ReactDOM.render(<App />, document.getElementById('app'));





document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
