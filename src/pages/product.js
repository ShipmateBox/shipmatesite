import React from 'react';

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
  return (
    <div className="App">
      <ProductOverview _id="ProductOverview"/>
      <Uses />
      <HowItWorks />
      <InfoSmart _id="InfoSmart"/>
      <InfoConnected _id="InfoConnected"/>
      <InfoResponsive _id="InfoResponsive"/>
      <InfoAdaptive _id="InfoAdaptive"/>
      <InfoStrong _id="InfoStrong"/>
    </div>
  )
}
