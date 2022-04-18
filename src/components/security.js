import React from 'react';

import {SideBySide} from './cards';

import {Section} from './sections';
import COLORS from '../constants/theme'

const nothingout = 'https://shipmate-images.s3.us-west-2.amazonaws.com/nothingout.jpeg';
const door = 'https://shipmate-images.s3.us-west-2.amazonaws.com/door.jpeg';
const garage = 'https://shipmate-images.s3.us-west-2.amazonaws.com/garage.jpeg';
const windowImage = 'https://shipmate-images.s3.us-west-2.amazonaws.com/window.jpeg';
const upper = 'https://shipmate-images.s3.us-west-2.amazonaws.com/upperdoor.jpeg';
const left = 'https://shipmate-images.s3.us-west-2.amazonaws.com/left.jpeg'
const bottom = 'https://shipmate-images.s3.us-west-2.amazonaws.com/bottom.jpeg';
const right = 'https://shipmate-images.s3.us-west-2.amazonaws.com/right.jpeg';
const house = 'https://shipmate-images.s3.us-west-2.amazonaws.com/house2.jpeg';

export default function Security() {
  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
      <div className="securityMainRow">
        <div style={{
          display: 'flex',
          flex: 2,
          justifyContent: 'end'
        }}>
          <div>
            <div className={"imageGroupC8R"}>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column'}}>
                <div style = {styles.imageDiv} className='skew'>
                    <img src={windowImage} className={'securityImage'} alt="window"/>
                </div>

                <div style = {styles.imageDiv} className='skew'>
                  <img src={door} className={'securityImage'} alt="door"/>
                </div>
              </div>

              <div style={{
                  display: 'flex',
                  flexDirection: 'column'}}>
                <div style = {styles.imageDiv} className='skew'>
                  <img src={garage} className={'securityImage'} alt="garage"/>
                </div>

                <div style = {styles.imageDiv} className='skew'>
                  <img src={nothingout} className={'securityImage'} alt="driveway"/>
                </div>
              </div>

            </div>
          </div>

          <div className={'imageGroupC8RSmall'}>
            <img src={house} className='securityImageSmall' alt="house"/>
          </div>

        </div>

        <div className='securitySideBySide1'>
          <SideBySide
            rightSide={
                <div className="securityHeaderElement">
                  <h2 className="securityHeaderItem">Normal<br/>Home<br/>Precautions</h2>
                </div>
              }
            leftSide={
              <div className="securityItemTable">
                <div className="securityItemElement" >
                  <p className="securityItemText">Locked Door</p>
                </div>
                <div className="securityItemElement" >
                  <p className="securityItemText">Locked Windows</p>
                </div>
                <div className="securityItemElement" >
                  <p className="securityItemText">Nothing Out</p>
                </div>
                <div className="securityItemElement" >
                  <p className="securityItemText">Garage Shut</p>
                </div>
              </div>
            }
            breakColor={COLORS.COLORS.BLUE_DARK}
          />

        </div>
      </div>

      <div className="securityMainRow">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,

        }}>
          <div style={{
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px',
          }}>
            <p className="securityPackageItem">Why Not Packages</p>
          </div>
        </div>

        <div style={window.innerWidth>600?{
          display: 'flex',
          justifyContent: 'start',
          flex: 2,
        }:{display: 'none'}}>
          <div className="imageGroupC8R">
            <div style={{
                display: 'flex',
                flexDirection: 'column'}}>
              <div style = {styles.imageDiv} className='skew'>
                <img src={upper}
                  style={{height: '100%'}}
                  alt="packages upper"/>
              </div>

              <div style = {styles.imageDiv} className='skew'>
                <img src={left}
                  style={{height: '100%'}}
                  alt="pakcages left"/>
              </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column'}}>
              <div style = {styles.imageDiv} className='skew'>
                <img src={right}
                  style={{height: '100%'}}
                  alt="packages right"/>
              </div>

              <div style = {styles.imageDiv} className='skew'>
                <img src={bottom}
                  style={{height: '100%'}}
                  alt="packages bottom"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
  },
  subContainerFirst: {
    display: 'flex',
    flex: 1
  },
  subContainerSecond: {
    flex: 1,
    borderLeft: `2px solid ${COLORS.COLORS.BLUE_DARK}`
  },
  house: {
    backgroundImage: `url(${door})`,
    backgroundSize: 'cover',
    width: '20vw',
    height: '20vh',
  },
  imageCard: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderRadius: '10px',
    maxWidth: '400px',
    height: '50px'
  },
  image: {
    borderRadius: '10px',
    width: '17.1vw',
    height: '17.1vw',
    transform: 'rotate(-45deg)',
    position: 'relative',
    top: '-2.5vw',
    left: '-2.4vw'
  },
  imageDiv: {
    borderRadius: '10px',
    margin: '8px',
    overflow: 'hidden',
    width: '12vw',
    height: '12vw'
  }
}
