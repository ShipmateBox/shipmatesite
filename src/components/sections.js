import React from 'react';

import Footer from './footer';
import {HashLink as Link} from 'react-router-hash-link';

import COLORS from '../constants/theme';

function Section(props) {
  return (
    <div style={props.theme=='light'?stylesLight.mainContainer:styles.mainContainer}>
      <header style={styles.header}>
        <p>{props.title}</p>
      </header>
      {props.note && <h3>{props.note}</h3>}
      {props.children}
    </div>
  )
}

function HalfSection(props) {
  return (
    <div style={props.theme=='light'?stylesLight.mainContainerHalf:styles.mainContainerHalf}>
      <header style={styles.header}>
        <p>{props.title}</p>
      </header>
      {props.children}
    </div>
  )
}


const styles = {
  mainContainer: {
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    padding: '10vh 10vw',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: COLORS.COLORS.WHITE
  },
  mainContainerHalf: {
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    paddingTop: '1vh',
    paddingBottom: '5vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    minHeight: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: COLORS.COLORS.WHITE
  },
  header: {
    fontSize: 'calc(14px + 3vmin)',
    paddingBottom: '0px'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    flex: 1,
    padding: '5vw',
    minWidth: '150px'

  }
}
const stylesLight = {
  mainContainer: {
    backgroundColor: COLORS.COLORS.WHITE,
    padding: '10vh 10vw',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: COLORS.COLORS.BLACK_MAIN_THEME
  },
  mainContainerHalf: {
    backgroundColor: COLORS.COLORS.WHITE,
    paddingTop: '5vh 5vw',
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: COLORS.COLORS.BLACK_MAIN_THEME
  },
}

export {
  Section,
  HalfSection,
};
