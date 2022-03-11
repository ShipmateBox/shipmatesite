import React, {useEffect} from 'react';

import ReactGA from 'react-ga';
import '../App.css';

import BoxSecure from '../images/result.svg';

import MenuBar from '../components/menu-bar';
import {Banner} from '../components/banner';

import Affordances from '../components/affordances';
import {ProductInfo} from '../components/productInfo';
import {
  SalesTable,
  SalesTableButtons,
  SmallSalesTable
} from '../components/funding';
import {
  Section,
  HalfSection,
  SalesSectionTemplate,
} from '../components/sections';

import {
  EmailForm
}  from '../components/forms';
import {
  SubmitButton
} from '../components/buttons';
import {
  Uses,
  HowItWorks
} from '../components/productInfo';

import Security from '../components/security';
import Features from '../components/features';
import SCREENSIZE from '../constants/screenSize';
const danopening = 'https://shipmate-images.s3.us-west-2.amazonaws.com/danopening.png';
const momopening = 'https://shipmate-images.s3.us-west-2.amazonaws.com/momopening.png';
const boxinbox = 'https://shipmate-images.s3.us-west-2.amazonaws.com/boxinbox.png';

const map = 'https://shipmate-images.s3.us-west-2.amazonaws.com/map_bg.png';


export default function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname); //Google Analytics
  },[])

  return (
    <div className="App">
      <Banner/>
      <HowItWorks />
      <Uses />
      <Affordances/>
      <Security/>
      <Features/>
      <div className="flashImageContainer">
        <div className="flashImages" style={{backgroundImage: `url(${danopening})`}}/>
        <div className="flashImages" style={{backgroundImage: `url(${momopening})`}}/>
        <div className="flashImages" style={{backgroundImage: `url(${boxinbox})`}}/>
      </div>
      <Section
        theme="light"
        title="Interested"
        image={`url(${map})`}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}
        >
          <p>Submit your email and we will let you know when we start our preorder campaign.</p>
          <EmailForm/>
          <p>Please don't worry, we believe in customer privacy and will never sell your personal information.</p>

          <p>If you have time, please take the survey.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCHo5t1XcAwKOD100VgOYMxSBo6fNEJjjG9LsvqCGSyqYC2A/viewform?usp=sf_link">
            <SubmitButton title="Take The Survey"/></a>
        </div>
      </Section>
      {/*<Section
        theme="light"
        title="Ready To Get Started"
        image={`url(${map})`}>
        <div style={{
          display: 'flex',
          flexDirection: 'column'}}
        >
        {window.innerWidth > SCREENSIZE.SCREENSIZE.SMALL?
          <>
            <SalesTable/>
            <SalesTableButtons/>
          </>
          :
          <SmallSalesTable
            showButton={true}/>


        </div>
      </Section>*/}
    </div>

  )
}
