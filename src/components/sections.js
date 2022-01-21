import React from 'react';

import {Timeline} from './timeline';

function Section(props) {
  return (
    <div style={props.theme=='light'?stylesLight.mainContainer:styles.mainContainer}>
      <header style={styles.header}>
        <p>{props.title}</p>
      </header>
      {props.note && <p>{props.note}</p>}
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
            <p>In side the lockbox, your packages stay out of the weather</p>
            <p>We warn you of extream temperatures that can effect sensative deliveries like medication and food.</p>
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
          <p>Cellular connection and solar power allowes you to place your lockbox anywhere.</p>
          <p>You recieve updates and control your lockbox from anywhere using your mobile phone.</p>
        </div>

        <div style={styles.card}>
          <h2>Responsive</h2>
          <p>Using Near Field Communication makes retrieving you packages faster and more reliable.</p>
        </div>

        <div style={styles.card}>
          <h2>Strong</h2>
          <p>Aerospace hexcore makes your lockbox strong but keeps the weight manageable.</p>
        </div>

        <div style={styles.card}>
          <h2>Adaptive</h2>
          <p>Your lockbox evolves with the shipping industry at not cost to you.</p>
          <p>Updates will be made to your product, adapting to droid and drone deliveries, carrier access, new forms of package tracking, and anything else the industry throws at us.</p>
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

function SectionFunding(props) {
  return (
    <Section
      title="Funding"
      note="-Every great product requires capital-"
      theme="dark">
    </Section>
  )
}

const styles = {
  mainContainer: {
    backgroundColor: '#282C34',
    paddingTop: '20vh',
    paddingBottom: '20vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: 'white'
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
    backgroundColor: '#ffffff',
    paddingTop: '20vh',
    paddingBottom: '20vh',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    color: '#282C34'
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
export {
  SectionAffordances,
  SectionTech,
  SectionTimeline,
  SectionFunding};
