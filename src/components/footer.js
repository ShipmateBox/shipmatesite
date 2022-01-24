import React from 'react';

import COLORS from '../constants/theme';

export default function Footer() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.subContainer}>
        <div style={styles.card}>
          <h4>Company</h4>
          <p style={styles.item}>Team</p>
          <p style={styles.item}>About</p>
        </div>
        <div style={styles.card}>
          <h4>Product</h4>
          <p style={styles.item}>Presales</p>
          <p style={styles.item}>NFT</p>
          <p style={styles.item}>Donate</p>
        </div>
        <div style={styles.card}>
          <h4>Contact</h4>
          <p style={styles.item}>Email</p>
          <p style={styles.item}>Twitter</p>
          <p style={styles.item}></p>
        </div>
      </div>
      <div style={styles.copyright}>
        <p>Copyright 2022 Shipmate</p>
      </div>
    </div>
  )
}


const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    color: COLORS.COLORS.WHITE,
    paddingTop: '5vh',
    paddingBottom: '1vh'
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '5vh'
  },
  card: {
    display: 'flex',
    flexDirection: 'column'
  },
  item: {
    margin: 3
  },
  copyright: {
    textAlign: 'center'
  }
}
