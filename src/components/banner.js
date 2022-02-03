import React, {useState, useEffect} from 'react';

import COLORS from '../constants/theme';
import {
  PreorderCard,
  DonateCard,
  } from './preorder';
import {GetWindowDimensions} from './window';
import neighborhood from '../images/neighborhood.jpeg';

function Banner(props) {

  const {width, height} = GetWindowDimensions();

  return(
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${neighborhood})`,
        backgroundSize: 'cover',
        // background: "linear-gradient(335deg, rgba(61,133,197,1) 0%, rgba(256, 256,256,1) 25%)"
      }}>
      <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                height: '100%',
                paddingTop: '10vh'
      }}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <div style={{display: 'flex',
                      flex: 1, flexDirection: 'column',
                      alignItems: 'end',
                      justifyContent: 'center',
                      paddingRight: '5%',
                      borderRight: '2px solid #3D85C5'}}>
            <h1 style={{margin: '0px'}}>Inteligent</h1>
            <h1 style={{margin: '0px'}}>Package</h1>
            <h1 style={{margin: '0px'}}>Deliveries</h1>
          </div >
            <div style={{display:
                      'flex', flex: 1,
                      flexDirection: 'column',
                      paddingLeft: '5%'}}>
              <p>A fully remote package recieving lockbox that will change the way you get deliveries.</p>
              <p>Place it anywhere on your property, control it with your phone, recieve warnings and notifications.</p>
            </div>
        </div>
        <div style={{marginTop: '5vh'}}>
          <PreorderCard/>
          <DonateCard/>
        </div>
      </div>
      <div style={{flex: 1}}>
      </div>

    </div>
  )
}

export {Banner};
