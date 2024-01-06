import React from 'react';
// import '../client/App.css'; // Import the CSS file
import styles from '../client/App.css';
// commented out what wasn't needed
import Feed from '../client/Feed';
import background from './bgNewer.jpeg'



const App = () => {

// whatever component to show goes here
  return (
    <div style={{ background: 'url(../photo/bgNewer.jpeg) center center / cover no-repeat', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    {/* <div> */}
      <h1>Hello non-paying user</h1>
      <div>Please upgrade to the paid SOLO project to see the full app</div>
    </div>
  );
};

//  style={{ backgroundImage: `url(${background})`}} this displayed the bg

export default App;