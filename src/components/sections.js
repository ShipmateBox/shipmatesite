import React from 'react';

import {Timeline} from './timeline';
import Sales from './funding';
import Footer from './footer';
import ProductOverview from './productOverview.js';
import {HashLink as Link} from 'react-router-hash-link';
import {
  InfoStrong,
  InfoResponsive,
  InfoConnected,
  InfoSmart,
  InfoAdaptive
} from './productInfo.js';
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

function SectionAffordances(props) {
  return (
    <Section
      title="AI Managing Your Deliveries!"
      note="-Our package lockbox is a full shipping and recieving robot for the home-"
      theme="dark">
      <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h2>Secured</h2>
            <p>Your packages are protected by aerospace hexcore material, staying safe from theft and waiting for you.</p>
            <p>Our advanced AI monitors your neighborhood security and provides warnings when danger lurks. </p>
          </div>

          <div style={styles.card}>
            <h2>Protected</h2>
            <p>Inside the lockbox, your packages stay out of the weather</p>
            <p>We warn you of extreme temperatures that can effect sensative deliveries like medication and food.</p>
          </div>

          <div style={styles.card}>
            <h2>Private</h2>
            <p>Your packages are concealed.  No one needs to know if you have  package, where its from, what size it is or anything else.</p>
            <p>No cameras watch you and your family coming and going from your home.</p>
          </div>

        <div style={styles.card}>
          <h2>Organized</h2>
          <p>You can monitor all your delivereis from one app.  No more searching through emials, texts, and websites to find where your package is. </p>
          <p>You will be notified, with proof, that your package has arived.</p>
        </div>

      </div>
    </Section>
  )
}

function SectionTech(props) {
  return (
    <Section
      title="Design Makes Us Better."
      note="-The right technology delivers superior products-"
      theme="light">
      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <h2>Connected</h2>
          <p>Cellular connection and solar power allows you to place your lockbox anywhere.</p>
          <p>You recieve updates and control your lockbox from anywhere using your mobile phone.</p>
          <p><Link to="/product#InfoConnected">-more-</Link></p>
        </div>

        <div style={styles.card}>
          <h2>Responsive</h2>
          <p>Using Near Field Communication makes retrieving your packages faster and more reliable.</p>
          <p><Link to="/product#InfoResponsive">-more-</Link></p>
        </div>

        <div style={styles.card}>
          <h2>Strong</h2>
          <p>Aerospace hexcore makes your lockbox strong but keeps the weight manageable.</p>
          <p><Link to="/product#InfoStrong">-more-</Link></p>
        </div>

        <div style={styles.card}>
          <h2>Adaptive</h2>
          <p>Your lockbox evolves with the shipping industry at not cost to you.</p>
          <p>Updates will be made to your product, adapting to droid and drone deliveries, carrier access, new forms of package tracking, and anything else the industry throws at us.</p>
          <p><Link to="/product#InfoAdaptive">-more-</Link></p>
        </div>

        <div style={styles.card}>
          <h2>Smart</h2>
          <p>We are developing a package receiving robot that uses lockbox data, Shipmate network data, weather data, security data, and carrier data to learn what all this means for the safety, security, and timely delivery of your packages."
          </p>
          <p><Link to="/product#InfoSmart">-more-</Link></p>
        </div>
      </div>
    </Section>
  )
}

function SectionTimeline(props) {
  return (
    <Section
      title= "The Journey"
      note="-Where we have been and where we are going-"
      theme="light">
        <Timeline/>
    </Section>
  )
}

function SectionSales(props) {
  return (
    <Section
      title="Sales / Support"
      note="-Every great product requires capital-"
      theme="dark">
        <Sales/>
    </Section>
  )
}

function SectionFooter(props) {
  return (
    <div style={stylesFooter.mainContainer}>
      <Footer/>
    </div>
  )
}

function SectionProductOverview(props) {
  return (
    <div  id={props._id}>
      <Section
        title="Product"
        theme="light">
        <ProductOverview/>
      </Section>
    </div>
  )
}

function SectionProductInfoStrong(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
          <InfoStrong/>
      </HalfSection>
    </div>
  )
}

function SectionProductInfoResponsive(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
          <InfoResponsive/>
      </HalfSection>
    </div>
  )
}

function SectionProductInfoConnected(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
          <InfoConnected/>
      </HalfSection>
    </div>
  )
}

function SectionProductInfoSmart(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
          <InfoSmart/>
      </HalfSection>
    </div>
  )
}

function SectionProductInfoAdaptive(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
          <InfoAdaptive/>
      </HalfSection>
    </div>
  )
}

const styles = {
  mainContainer: {
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    paddingTop: '20vh',
    paddingBottom: '20vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
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
    paddingTop: '20vh',
    paddingBottom: '20vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: COLORS.COLORS.BLACK_MAIN_THEME
  },
  mainContainerHalf: {
    backgroundColor: COLORS.COLORS.WHITE,
    paddingTop: '5vh',
    paddingBottom: '5vh',
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
const stylesFooter = {
  mainContainer: {
    mainContainer: {
      backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
      paddingTop: '10vh',
      paddingBottom: '10vh',
      paddingLeft: '10vw',
      paddingRight: '10vw',
      minHeight: '20vh',
      color: COLORS.COLORS.WHITE
    },
  }
}
export {
  Section,
  HalfSection,
  SectionAffordances,
  SectionTech,
  SectionTimeline,
  SectionSales,
  SectionFooter,
  SectionProductOverview,
  SectionProductInfoStrong,
  SectionProductInfoResponsive,
  SectionProductInfoConnected,
  SectionProductInfoSmart,
  SectionProductInfoAdaptive
};
