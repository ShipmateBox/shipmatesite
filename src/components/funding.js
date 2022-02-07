import React, {useEffect, useState} from 'react';

import {
  PreorderButton,
  R9ENFTButton,
  SupportButton,
} from './buttons';
import {Section, HalfSection} from '../components/sections';

import SCREENSIZE from '../constants/screenSize';
import COLORS from '../constants/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import map from '../images/map_bg.png';

const smallScreenSize = SCREENSIZE.SCREENSIZE.SMALL;


function Sales() {
  return (
    <Section
      theme="light"
      title="Ready To Get Started"
      image={`url(${map})`}>
      <SalesIntoTable/>
    </Section>
  )}


function SalesIntoTable() {
  const [tableWidth, setTableWidth] = useState();

  useEffect(() => {
    setTableWidth(document.getElementById('table1').offsetWidth);
  },[]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'}}
    >
      <div style={{
        display: 'flex',
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '5vh',
        maxWidth: '50em',
        fontWeight: 'bold'
      }} id="table1">


        <div className="itemColumn">
          <div className="titleRowPadding">
          </div>
          <div className="costRow">
            <p style={{flex: 1}}>Cost</p>
            <div style={{
              position: 'absolute',
              width: tableWidth,
              maxWidth: '85vw',
              height: '10em',
              backgroundColor: COLORS.COLORS.BLUE_DARK,
              background: 'linear-gradient(315deg, rgba(114,118,173,0.5522584033613445) 0%, rgba(61,133,197,1) 100%)',
              opacity: '0.25',
              marginTop: '5em',
              borderRadius: '10px',
            }}></div>
          </div>
          <div className="availableRow">
            <p style={{flex: 1}}>Available</p>
          </div>
          <div className="tableVPadding"></div>
          <div className="perkItem">
            <p style={{flex: 1}}>Art</p>
          </div>
          <div className="perkItem">
            <p style={{flex: 1}}>Cut In Line</p>
          </div>
          <div className="perkItem">
            <p style={{flex: 1}}>Initial Cost</p>
          </div>
          <div className="perkItem">
            <p style={{flex: 1}}>Subscription Savings</p>
          </div>
        </div>


        <div className="supportNFTColumn">
          <div className="titleRow">
            <p className="titleP9H">Support</p>
            <p className="titleP9H">(NFT)</p>
          </div>
          <div className="costRow">
            <p > 0.1 SOL / 0.1 ETH</p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="availableRow">
            <p style={{flex: 1}}>  2500 </p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="tableVPadding"></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
          </div>

        </div>


        <div className="redeemableColumn">
          <div className="titleRow">
            <p className="titleP9H">Redeemable</p>
            <p className="titleP9H">(NFT)</p>
          </div>
          <div className="costRow">
            <p style={{flex: 1}}>$100</p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="availableRow">
            <p style={{flex: 1}}>500</p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="tableVPadding"></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}>20% 1st Year</p>
          </div>
        </div>


        <div className="preorderColumn">
          <div className="titleRow">
            <p className="titleP9H">Preorder</p>
            <p className="titleP9H">(Traditional)</p>
          </div>
          <div className="costRow">
            <p style={{flex: 1}}>$100</p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="availableRow">
            <p style={{flex: 1}}>No Limit</p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="tableVPadding"></div>
          <div className="perkItem">
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}><FontAwesomeIcon icon={faCheck} className="cardIcon"/></p>
          </div>
          <div style={{height:0, width: '100%', borderBottom: '1px solid black'}}></div>
          <div className="perkItem">
            <p style={{flex: 1}}>20% 1st Year</p>
          </div>
        </div>

      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '3em'}}>
        <div style={{flex: 1, width: '1px'}}>
        </div>
        <div style={{flex: 1}}>
          <SupportButton/>
        </div>
        <div style={{flex: 1}}>
          <R9ENFTButton/>
        </div>
        <div style={{flex: 1}}>
          <PreorderButton/>
        </div>
      </div>
    </div>

  )
}




function FundraiseOverview() {
  return (
    <div>
    </div>
  )
}

function FundraisePreOrder() {
  return (
    <div>
      <HalfSection
        theme='light'>
          <h2>Traditional Preorder Campaign</h2>
      </HalfSection>
    </div>
  )
}

function FundraiseNFT() {
  return (
    <div>
      <HalfSection
        theme='light'>
          <h2>NFT Preorder Campaign</h2>
      </HalfSection>
    </div>
  )
}

function FundraiseDonate() {
  return (
    <div>
      <HalfSection
        theme='light'>
          <h2>Donate And Be Our Hero !</h2>
          <p>Building stuff is hard and requires money.  If you like the product, like what we are trying to do, want to suport a small business, or just feel generous plase donate. </p>
          <p>All donated funds are invested directly into the business.</p>
          <p>For donating we will put you on our wall of heroes. A special place for everyone that helps bring this product to life.</p>
      </HalfSection>
    </div>
  )
}


function smallScreen() {
  return window.innerWidth<smallScreenSize
}
const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: smallScreen()?'column':'row',
    marginTop: '5vw'
  },
  subContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%'
  },
  subContainerHeading: {
    borderBottom: '1px solid white',
    padding: '2vh'
  },
  presales: {
    flex: 1,
    textAlign: 'center',
    paddingTop: '3vh',
    paddingBottom: '3vh',
    paddingLeft: '3vw',
    paddingRight: '3vw',
    border: '1px solid white',
    margin: '10px',
    borderRadius: '5px'
  },
  donations: {
    flex: 1,
    textAlign: 'ceter',
    paddingTop: '3vh',
    paddingBottom: '3vh',
    paddingLeft: '3vw',
    paddingRight: '3vw',
    border: '1px solid white',
    margin: '10px',
    borderRadius: '5px'
  },
  nft: {
    flex: 1,
    paddingTop: '3vh',
    paddingBottom: '3vh',
    paddingLeft: '3vw',
    paddingRight: '3vw',
    border: '1px solid white',
    margin: '10px',
    borderRadius: '5px'
  }
}
export {
  Sales,
  FundraiseOverview,
  FundraisePreOrder,
  FundraiseNFT,
  FundraiseDonate
}
