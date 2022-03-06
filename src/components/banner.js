import React, {useState, useEffect} from 'react';

import COLORS from '../constants/theme';
import {
  PreorderButton,
  R9ENFTButton,
} from './buttons';
import {GetWindowDimensions} from './window';
import SCREENSIZE from '../constants/screenSize';
import {EmailForm} from './forms';
import openbox from '../images/openbox.png';
import danhouse from '../images/danbouse.png';
import frontdoor from '../images/frontdoor.png';

const neighborhood = 'https://shipmate-images.s3.us-west-2.amazonaws.com/neighborhood.jpeg';


const smallScreenSize = SCREENSIZE.SCREENSIZE.SMALL;

function Banner(props) {

  const {width, height} = GetWindowDimensions();

  return(
    <div className="bannerMainC8R">
      <div className="bannerMainSubC8Rbacking">
      <div className="bannerMainSubC8R">
        <div className="mainSubC8RUpper">
          <div className="introTitleC8R">
            <h1 className="introTitle">Intelligent</h1>
            <h1 className="introTitle">Package</h1>
            <h1 className="introTitle">Deliveries</h1>
          </div>
            <div className="introTextC8R">
              <p>A fully remote package receiving lockbox that will change the way you get deliveries.</p>
              <p>Place it anywhere on your property, control it with your phone, receive warnings and notifications.</p>
            </div>
        </div>
        <p>Show your support</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '0em'}}>
          <div style={{flex: 1, minWidth: '8em'}}>
            <PreorderButton/>
          </div>
          <div style={{flex: 1, minWidth: '8em'}}>
            <R9ENFTButton/>
          </div>
        </div>
        <p> or submitting your email </p>
        <EmailForm />
      </div>
      </div>
      <div className="padding">
      </div>
    </div>
  )
}

function smallScreen() {
  return window.innerWidth<smallScreenSize
}

const styles = {

  padding: {
    flex: smallScreen()?0:1
  }
}



export {Banner};
