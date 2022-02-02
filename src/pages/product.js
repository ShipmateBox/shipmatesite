import React from 'react';

import {
  SectionProductOverview,
  SectionProductInfoStrong,
  SectionProductInfoResponsive,
  SectionProductInfoConnected,
  SectionProductInfoAdaptive,
  SectionProductInfoSmart
} from '../components/sections';


export default function Product() {
  return (
    <div className="App">
      <SectionProductOverview _id="ProductOverview"/>
      <SectionProductInfoStrong _id="InfoStrong"/>
      <SectionProductInfoResponsive _id="InfoResponsive"/>
      <SectionProductInfoConnected _id="InfoConnected"/>
      <SectionProductInfoSmart _id="InfoSmart"/>
      <SectionProductInfoAdaptive _id="InfoAdaptive"/>
    </div>
  )
}
