import React from 'react';
import COLORS from '../constants/theme';

function InfoStrong() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <p>image needed</p>
      </div>
      <div style={styles.textContainer}>
        <h1>Strong</h1>
        <p>This lockbox is strong.  We build our product using special material from the aerospace industry called hex core.  This make the lockbox very strong and light.</p>
        <p>Though this box is strong, it does not need to be to protect packages.  Package theft is a crime of opportunity.  If your package is hidden and modestly protected, thieves will look for an easier target.</p>
        <p>Maintaining the product light is key in keeping costs to consumers low and making the product easy to manage.  Don’t worry though, every lockbox comes with a chain down port to prevent anyone from walking away with it.</p>
      </div>
    </div>
  )
}

function InfoResponsive() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <p>image needed</p>
      </div>
      <div style={styles.textContainer}>
        <h1>Responsive</h1>
        <p>We believe ease of use is one of the most important parts of a great product.  This is why our product is designed to be opened using only your phone. </p>
        <p>By using technologies like Near Field Communication and staying away from WiFi or BLE, our product is fast.  Our product will not lag due to network issues, or fail to connect.  It simply works first time, every time. </p>
        <p>Additional, this technology lets you place the lockbox anywhere on your property, far outside your WiFi router range.  </p>
      </div>
    </div>
  )
}

function InfoConnected() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <p>image needed</p>
      </div>
      <div style={styles.textContainer}>
        <h1>Connected</h1>
        <p>You will always have the ability to control and monitor your lockbox from anywhere.  Data including deliveries and temperatures of your lockbox are constantly updated to your mobile phone.  This provides real time delivery updates, warning of extreme temperatures that may harm sensitive packages, and overall understanding of what is going on with your deliveries.</p>
        <p>We chose to use cellular networks, and not WiFi, to connect your lockbox to the cloud. This allows you to place your lockbox far away from your home and it will still be connected.</p>
      </div>
    </div>
  )
}

function InfoSmart() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <p>image needed</p>
      </div>
      <div style={styles.textContainer}>
        <h1>Smart</h1>
        <p>This product is not a lockbox, it is a package receiving system.  Just like companies maintain shipping and receiving department to manage, maintain, and track their deliveries, with the exponential increase in packages being delivered to the home,  people need something similar.</p>
        <p>Weather can destroy sensitive packages. Our system will monitor and learn what weather forecasts mean for your packages.  If you have sensitive packages coming, we will notify you of extreme weather before it arrives.  This is a must have for anyone who gets medication, food, electronics, or any other sensitive items delivered to their home. </p>
        <p>Our system uses advanced AI to learn from Shipmate network data, weather data, security data, and lockbox data, to lear what it all means for the safety, security and timely delivery of your packages</p>
        <p>Security is a top concern for deliveries.  Tens of millions of dollars worth of packages are stolen everyday.  We monitor public records and Shipmate network data to understand your neighborhoods security so you can take precautionary measures. </p>
        <p>Current package tracking is unreliable.  Our system will use all available data to learn when you can actually expect to receive your packages, not just when they are scheduled to arrive. </p>
      </div>
    </div>
  )
}

function InfoAdaptive() {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <p>image needed</p>
      </div>
      <div style={styles.textContainer}>
        <h1>Adaptive</h1>
        <p>By offering our product and a subscription product, we are able to keep your lockbox up to date with all the revolutions that are coming to the package delivery industry. </p>
        <p>In the following years the number of deliveries to peoples homes will skyrocket.  New technology will be used to manage the new delivery volume.  Only a product that can adapt to these changes will stay useful over the medium long term. </p>
        <p>Technology that we are already preparing for are droid and drone deliveries, carrier handled devices that can access your lockbox and increase your package security, and advanced tracking systems.</p>
      </div>
    </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  textContainer: {
    flex: 2,
  }

}

const stylesDark = {
  mainContainer: {
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    color: COLORS.COLORS.WHITE
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 2,
    textAlign: 'center'
  }
}

export {
  InfoStrong,
  InfoResponsive,
  InfoConnected,
  InfoSmart,
  InfoAdaptive
};
