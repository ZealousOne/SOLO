import React from 'react';
import { createRoot } from 'react-dom/client';
import Feed from './Feed';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import FeedItem from './FeedItem';

const url =
  'http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images';


// App consists of one feed
const App = () => {
  return (
    <div style={styles.container}>
      {/* me trying to make the url pass to feed */}
      <Feed feedUrl={url}/>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

// Render an <App> component to the #app div in the body
const root = createRoot(document.getElementById('app'));
root.render(<App />);
