import React from 'react';
import COLORS from '../constants/theme';
import{ HalfSection, Section }from './sections';

import LockboxDeliveryRive from '../components/Rive';

import {HashLink as Link} from 'react-router-hash-link';

const gear = 'https://shipmate-images.s3.us-west-2.amazonaws.com/sportGear.jpeg';
const farm = 'https://shipmate-images.s3.us-west-2.amazonaws.com/farm.jpeg';
const food = 'https://shipmate-images.s3.us-west-2.amazonaws.com/food.jpeg';
const key = 'https://shipmate-images.s3.us-west-2.amazonaws.com/key.jpeg';
const house = 'https://shipmate-images.s3.us-west-2.amazonaws.com/house2.jpeg';

function ProductOverview(props) {
  return (
    <div  id={props._id}>
      <Section
        title="Product"
        theme="light">
        <div>
          <p>Image</p>
        </div>
      </Section>
    </div>
  )
}

function InfoStrong(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
        <div className="infoFeatureC8R">
          <div style={styles.imageContainer}>
            <p className="infoCardsHeader">Strong</p>
          </div>
          <div style={styles.textContainer}>
            <p>This lockbox is strong.  We build our product using special material from the aerospace industry called hex core.  This make the lockbox very strong and light.</p>
            <p>Though this box is strong, it does not need to be to protect packages.  Package theft is a crime of opportunity.  If your package is hidden and modestly protected, thieves will look for an easier target.</p>
            <p>Maintaining the product light is key in keeping costs to consumers low and making the product easy to manage.  Don’t worry though, every lockbox comes with a chain down port to prevent anyone from walking away with it.</p>
          </div>
        </div>
      </HalfSection>
    </div>
  )
}

function InfoResponsive(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
        <div className="infoFeatureC8R">
          <div style={styles.imageContainer}>
            <p className="infoCardsHeader">Responsive</p>
          </div>
          <div style={styles.textContainer}>
            <p>We believe ease of use is one of the most important parts of a great product.  This is why our product is designed to be opened using only your phone. </p>
            <p>By using technologies like Near Field Communication and staying away from WiFi or BLE, our product is fast.  Our product will not lag due to network issues, or fail to connect.  It simply works first time, every time. </p>
            <p>Additional, this technology lets you place the lockbox anywhere on your property, far outside your WiFi router range.  </p>
          </div>
        </div>
      </HalfSection>
    </div>
  )
}

function InfoConnected(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
        <div className="infoFeatureC8R">
          <div style={styles.imageContainer}>
            <p className="infoCardsHeader">Connected</p>
          </div>
          <div style={styles.textContainer}>
            <p>You will always have the ability to control and monitor your lockbox from anywhere.  Data including deliveries and temperatures of your lockbox are constantly updated to your mobile phone.  This provides real time delivery updates, warning of extreme temperatures that may harm sensitive packages, and overall understanding of what is going on with your deliveries.</p>
            <p>We chose to use cellular networks, and not WiFi, to connect your lockbox to the cloud. This allows you to place your lockbox far away from your home and it will still be connected.</p>
          </div>
        </div>
      </HalfSection>
    </div>
  )
}

function InfoSmart(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
      <div className="infoFeatureC8R">
        <div style={styles.imageContainer}>
          <p className="infoCardsHeader">Smart</p>
        </div>
        <div style={styles.textContainer}>
          <p>This product is not a typical lockbox, it is a package receiving system.  Just like companies maintain shipping and receiving department to manage, maintain, and track their deliveries, with the exponential increase in packages being delivered to the home,  people need something similar.</p>
          <p>Weather can destroy sensitive packages. Our system will monitor and learn what weather forecasts mean for your packages.  If you have sensitive packages coming, we will notify you of extreme weather before it arrives.  This is a must have for anyone who gets medication, food, electronics, or any other sensitive items delivered to their home. </p>
          <p>Our system uses advanced AI to learn from Shipmate network data, weather data, security data, and lockbox data, to lear what it all means for the safety, security and timely delivery of your packages</p>
          <p>Security is a top concern for deliveries.  Tens of millions of dollars worth of packages are stolen everyday.  We monitor public records and Shipmate network data to understand your neighborhoods security so you can take precautionary measures. </p>
          <p>Current package tracking is unreliable.  Our system will use all available data to learn when you can actually expect to receive your packages, not just when they are scheduled to arrive. </p>
        </div>
      </div>
      </HalfSection>
    </div>
  )
}

function InfoAdaptive(props) {
  return (
    <div id={props._id}>
      <HalfSection
        theme="light">
        <div className="infoFeatureC8R">
          <div style={styles.imageContainer}>
            <p className="infoCardsHeader">Adaptive</p>
          </div>
          <div style={styles.textContainer}>
            <p>By offering our product and a subscription product, we are able to keep your lockbox up to date with all the revolutions that are coming to the package delivery industry. </p>
            <p>In the following years the number of deliveries to peoples homes will skyrocket.  New technology will be used to manage the new delivery volume.  Only a product that can adapt to these changes will stay useful over the medium long term. </p>
            <p>Technology that we are already preparing for are droid and drone deliveries, carrier handled devices that can access your lockbox and increase your package security, and advanced tracking systems.</p>
          </div>
        </div>
      </HalfSection>
    </div>
  )
}

function Uses() {
  return (
    <div>
      <HalfSection
        theme="light"
        title="Perfect For">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: '0em 2em'
          }}>
            <div className="usesCard">
              <p className="usesCardText">Neighborhoods</p>
              <div className="usesCardImageC8R">
                  <img src={house} className="usesCardImage"/>
              </div>
            </div>
            <div className="usesCard">
              <p className="usesCardText">Long Drivways</p>
              <div className="usesCardImageC8R">
                  <img src={farm} className="usesCardImage"/>
              </div>
            </div>
            <div className="usesCard">
              <p className="usesCardText">Airbnb / Hid-A-Key</p>
              <div className="usesCardImageC8R">
                  <img src={key} className="usesCardImage"/>
              </div>
            </div>
            <div className="usesCard">
              <p  className="usesCardText">Food / Medicaton Deliveries</p>
              <div className="usesCardImageC8R">
                  <img src={food} className="usesCardImage"/>
              </div>
            </div>
            <div className="usesCard">
              <p className="usesCardText">Drop Offs</p>
              <div className="usesCardImageC8R">
                  <img src={gear} className="usesCardImage"/>
              </div>
            </div>
          </div>
      </HalfSection>
    </div>
  )
}

function ProductInfo() {
  return (
    <Section
      title="Design Makes Us Better."
      note="-The right technology delivers superior products-"
      theme="light">
      <div style={styles.cardContainer}>

        <div style={styles.card}>
          <h2>Connected</h2>
          <p>Cellular connection and solar power allows you to place your lockbox anywhere and stay in control.</p>
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

function HowItWorks() {
  return (
    <HalfSection
      theme="dark"
      title="How It Works">
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: 1,
          }}>
            <LockboxDeliveryRive />
          </div>
          <div style={{
            flex: 1
          }}>
            <div>
              <p>Your lockbox starts in Ready to Recieve Mode.</p>
            </div>
            <div>
              <p>Delivered packages are placed in the lockbox.</p>
            </div>
            <div>
              <p>The lockbox locks when the lid is closed.</p>
            </div>
            <div>
              <p>You are notified right away.</p>
            </div>
            <div>
              <p>When you are ready to get your package, open the lockobx with the mobile app.</p>
            </div>
            <div>
              <p>Leave your lockbox in Ready to Recieve Mode.</p>
            </div>
          </div>
        </div>
        <div style={{flex: 1}}>Know you have a nother package coming before you expect to get home, unlock the lockbox remotly using your mobile phone.</div>
      </div>
    </HalfSection>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  textContainer: {
    flex: 2,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    flex: 1,
    padding: '3vw',
    minWidth: '150px'

  }

}

export {
  ProductInfo,
  ProductOverview,
  InfoAdaptive,
  InfoResponsive,
  InfoConnected,
  InfoStrong,
  InfoSmart,
  Uses,
  HowItWorks
};
