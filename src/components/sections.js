import React from 'react';

import Footer from './footer';
import {HashLink as Link} from 'react-router-hash-link';

import COLORS from '../constants/theme';

function Section(props) {
  return (
    <section style={{backgroundImage: props.image}}
    className={props.theme=='light'?"mainC9Rfull sectionLight":"mainC9Rfull sectionDark"}>
      <h2 className="sectionH2">
        {props.title}
      </h2>
      {props.note && <p className="sectionNote">{props.note}</p>}
      {props.children}
    </section>
  )
}

function HalfSection(props) {
  return (
    <section style={props.theme=='light'?stylesLight.mainContainerHalf:styles.mainContainerHalf}>
      <h2 className="sectionH2">
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}

function SalesSectionTemplate(props) {
  return (
    <div style={{backgroundImage: props.image, paddingTop: '0px'}}
    className="mainC9Rfull sectionLight">
      <h2 style={{fontSize: '1.3em'}}>
        {props.title}
      </h2>
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
