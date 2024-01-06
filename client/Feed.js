import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem';

// Feed contains multiple FeedItems
// Put AJAX in this Component
const Feed = ({feedUrl}) => {

  const [urls, updateUrls] = useState([]);
// if data looks same as dependencies, it doesn't need to rerender. Otherwise rerender
// second param *works the same* as passing in urls or an empty array [] * = maybe, look into
  useEffect(renderThis,urls);

  // put render logic here
  function renderThis(){
    fetch(feedUrl)
      .then((data) => data.json())
      .then((newData) => {
        updateUrls(newData);
      })
      .catch(err=> console.log(err));
  }
  // I moved the map outside of the div and added the variable into the return div
  const imagesFeed = urls.map(url => {
    return <FeedItem urls={url} key={url}/>;
  });

  return (
    <div id='feed' style={styles.container}>
      {
        imagesFeed
      }
    </div>
  );
};

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

export default Feed;