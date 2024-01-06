import React from 'react';

// FeedItem should consist of an image (src contained in the data from the AJAX request)
const FeedItem = ({urls}) => {
  // put render logic here
  return (
    <div className='feedItem' style={styles.container}>
      <img src={urls}/>
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid black',
    height: '100%',
    width: '100%',
    flex: 1,
  },
};

export default FeedItem;
