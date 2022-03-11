import React from 'react';

import COLORS from '../constants/theme';
import {HashLink as Link} from 'react-router-hash-link';

export default function Footer() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.subContainer}>
        <div style={styles.card}>
          <h4>Company</h4>
          <Link to="/company#team"><p style={styles.item}>Team</p></Link>
          <Link to="/company#about"><p style={styles.item}>About</p></Link>

        </div>
        <div style={styles.card}>
          <h4>Support</h4>
          <Link
            to="/Fundraise"
            state={{data: 3}}>
            <p style={styles.item}>Presales</p>
          </Link>
          <Link
            to="/Fundraise"
            state={{data: 2}}>
            <p style={styles.item}>NFT</p>
          </Link>

        </div>
        <div style={styles.card}>
          <h4>Contact</h4>
          <p style={styles.item}>Email</p>
          <a href="https://twitter.com/ShipmateBox" style={styles.item}>Twitter</a>
          <a href="https://www.facebook.com/ShipmateBox" style={styles.item}>Facebook</a>
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
    margin: 3,
    color: 'white',
  },
  copyright: {
    textAlign: 'center'
  }
}
