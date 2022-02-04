import React from 'react';

import {Section} from './sections';
import house from '../images/house.jpeg';


export default function Security() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.house}>
      </div>
    </div>
  )
}

const styles = {
  mainContainer: {
    width: '100vw',
    height: '100vh'
  },
  house: {
    backgroundImage: `url(${house})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
  }
}
