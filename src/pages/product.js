import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet-async';

import {
  ProductOverview,
  ProductInfo,
  InfoAdaptive,
  InfoResponsive,
  InfoConnected,
  InfoStrong,
  InfoSmart,
  Uses,
  HowItWorks
} from '../components/productInfo';

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

      <ProductOverview _id="ProductOverview"/>
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
