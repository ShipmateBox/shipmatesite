import React, {useState, useEffect} from 'react';

import COLORS from '../constants/theme';
import {
  PreorderCard,
  DonateCard,
} from './buttons';
import {GetWindowDimensions} from './window';
import neighborhood from '../images/neighborhood.jpeg';

const smallScreenSize = 800;

function Banner(props) {

  const {width, height} = GetWindowDimensions();

  return(
    <div style={styles.mainContainer}>
      <div style={styles.mainSubContainer}>
        <div style={styles.mainSubContainerUpper}>
          <div style={styles.introTitleContainer}>
            <h1 style={styles.introTitle}>Inteligent</h1>
            <h1 style={styles.introTitle}>Package</h1>
            <h1 style={styles.introTitle}>Deliveries</h1>
          </div>
            <div style={styles.introTextContainer}>
              <p>A fully remote package recieving lockbox that will change the way you get deliveries.</p>
              <p>Place it anywhere on your property, control it with your phone, recieve warnings and notifications.</p>
            </div>
        </div>
        <div style={styles.mainSubContainerLower}>
          <PreorderCard/>
          <DonateCard/>
        </div>
      </div>
      <div style={styles.padding}>
      </div>
    </div>
  )
}

function smallScreen() {
  return window.innerWidth<smallScreenSize
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    minHeight: smallScreen()?'100vh':'80vh',
    backgroundImage: smallScreen()?'none':`url(${neighborhood})`,
    backgroundSize: smallScreen()?'none':'cover',
    padding: '10vh 0vh 0vw 0vw'
  },
  mainSubContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
  },
  mainSubContainerUpper: {
    display: 'flex',
    flexDirection: smallScreen()?'column':'row'
  },
  mainSubContainerLower: {
    marginTop: '5vh'
  },
  padding: {
    flex: smallScreen()?0:1
  },
  introTitleContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: smallScreen()?'center':'end',
    justifyContent: 'center',
    padding: smallScreen()?'0vh 0vh 5vh 0vh':'0vh 5vh 0vh 0vw',
    borderRight:  smallScreen()?"none":"2px solid #3D85C5",
    borderBottom: smallScreen()?"2px solid #3D85C5":"none"
  },
  introTextContainer: {
    display:'flex',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '5%'
  },
  introTitle: {
    margin: '0px'
  }
}



export {Banner};
