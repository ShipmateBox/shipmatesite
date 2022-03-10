import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

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
