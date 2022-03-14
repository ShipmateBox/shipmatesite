import React from 'react'

import{ Section }from './sections';

import COLORS from '../constants/theme';

import boxSecure from '../images/BoxSecureBigMini.svg';
import boxProtected from '../images/BoxProtectedBigMini.svg';
import boxOrganized from '../images/BoxOrganizedBigMini.svg';
import boxPrivate from '../images/BoxPrivateBigMini.svg';

export default function Affordances(props) {
  return (
    <Section
      title="AI Managing Your Deliveries!"
      note="-Our package lockbox is a full shipping and receiving robot for the home-"
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
            <p>We warn you of extreme temperatures that can effect sensitive deliveries like medication and food.</p>
          </div>

          <div style={styles.card}>
            <h2>Private</h2>
            <p>Your packages are concealed.  No one needs to know if you have a package, where its from, what size it is or anything else.</p>
            <p>No cameras watch you and your family coming and going from your home.</p>
          </div>

        <div style={styles.card}>
          <h2>Organized</h2>
          <p>You can monitor all your deliveries from one app.  No more searching through emails, texts, and websites to find where your package is. </p>
          <p>You will be notified, with proof, that your package has arrived.</p>
        </div>

      </div>
    </Section>
  )
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    flex: 1,
    padding: '3vw',
    minWidth: '150px',
    margin: '0.5vw',
    borderRadius: '10px',
    // background: 'linear-gradient(59deg, rgba(61,133,198,1) 0%, rgba(111,168,220,1) 100%)'
  },
  image: {
    height: '10vh',
    margin: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    // backgroundColor: 'white',
    // borderRadius: '500px',
    // padding: '50px'
  }
}
