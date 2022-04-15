import React from 'react';

import Footer from './footer';
import {HashLink as Link} from 'react-router-hash-link';

import COLORS from '../constants/theme';

function Section(props) {
  return (
    <div style={{backgroundImage: props.image}}
    className={props.theme=='light'?"mainC9Rfull sectionLight":"mainC9Rfull sectionDark"}>
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

function SalesSectionTemplate(props) {
  return (
    <div style={{backgroundImage: props.image, paddingTop: '0px'}}
    className="mainC9Rfull sectionLight">
      <header style={styles.header}>
        <p>{props.title}</p>
      </header>
      {props.note && <h3>{props.note}</h3>}
      {props.children}
    </div>
  )
}


const styles = {
  mainContainer: {
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    color: COLORS.COLORS.WHITE
  },
  mainContainerHalf: {
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    paddingTop: '10vh',
    paddingBottom: '10vh',
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
    color: COLORS.COLORS.BLACK_MAIN_THEME
  },
  mainContainerHalf: {
    backgroundColor: COLORS.COLORS.WHITE,
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '5vw',
    paddingRight: '5vw',
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
  SalesSectionTemplate
};
