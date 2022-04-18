import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet-async';

import {
  ProductInfo,
  InfoAdaptive,
  InfoResponsive,
  InfoConnected,
  InfoStrong,
  InfoSmart,
  Uses,
  HowItWorks
} from '../components/productInfo';

const flowerbed = 'https://shipmate-images.s3.us-west-2.amazonaws.com/flowerbed.png';
const flowerbedSmall = 'https://shipmate-images.s3.us-west-2.amazonaws.com/flowerbed_small.jpeg'


export default function Product() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname) //Google analytics.
  }, [])

  return (
    <div className="App">

      <Helmet>
        <title>product</title>
        <meta
          name="description"
          content="The Shipmate lockbox is a package recieving system.  The worlds largest network of lockboxes ensuring deliveries are safe. Solar powered and can be placed anywhere." />
        <link rel="canonical" href="/product"/>
      </Helmet>

      <section  id="ProductOverview"
      style={window.innerWidth>600?{display: 'flex', justifyContent:'center', backgroundImage: `url(${flowerbed})`, height: '100vh', backgroundSize: 'cover'}
    :{display: 'flex', justifyContent:'center', backgroundImage: `url(${flowerbedSmall})`, height: '100vh', backgroundSize: 'cover'}}>
        <div style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'}}>
          <div style={{
            backgroundColor: 'rgb(62,133, 192, .95)',
            borderRadius: '10px',
            marginTop: '-30vh'}}>
            <div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <h1 className="cardC8R" style={{fontWeight: 'normal', fontSize: '3em', padding: '0em 1em', margin: "0.3em"}}>
                  Lockbox Product Details
                </h1>
                <p className="cardC8R">
                  A one of a kind package recieving system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Uses />
      <InfoSmart _id="InfoSmart"/>
      <InfoConnected _id="InfoConnected"/>
      <InfoResponsive _id="InfoResponsive"/>
      <InfoAdaptive _id="InfoAdaptive"/>
      <InfoStrong _id="InfoStrong"/>
    </div>
  )
}
