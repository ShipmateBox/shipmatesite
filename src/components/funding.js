import React, {useEffect, useState} from 'react';

import {
  PreorderButton,
  R9ENFTButton,
  SupportButton,
  CheckoutButton,
  FullWidthButton
} from './buttons';
import {
  Section,
  HalfSection,
  SalesSectionTemplate,
} from '../components/sections';

import SCREENSIZE from '../constants/screenSize';
import COLORS from '../constants/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  SideBySide,
  OverUnder
} from './cards';

import ftx from '../images/FTX (1).svg';
import opensea from '../images/opensea.svg';

const map = 'https://shipmate-images.s3.us-west-2.amazonaws.com/map_bg.png';
const lockbox = 'https://shipmate-images.s3.us-west-2.amazonaws.com/lockbox.png';
const lockboxWithNFT = 'https://shipmate-images.s3.us-west-2.amazonaws.com/lockboxWithNFT.png';

const smallScreenSize = SCREENSIZE.SCREENSIZE.SMALL;


function SalesTable() {
  const [tableWidth, setTableWidth] = useState();

  useEffect(() => {
    setTableWidth(document.getElementById('table1').offsetWidth);
  },[]);

  return (
    <div style={{
      display: 'flex',
      textAlign: 'center',
      fontSize: '18px',
      marginTop: '5vh',
      maxWidth: '50em',
      fontWeight: 'bold',
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
          <p>Coming Soon</p>
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
          <p style={{flex: 1}}>Coming Soon</p>
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
          <p style={{flex: 1}}>Coming Soon</p>
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
  )
}

function SalesTableButtons() {
  return (
    <div className="saleTableButtons">
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
  )
}

function SmallSalesTable(props) {
  const [type, setType] = useState(1);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <div style={{width: '100vw'}} onClick={()=>setType(1)}><FullWidthButton title="Support NFT"/></div>
    <div style={{width: '100vw'}} onClick={()=>setType(2)}><FullWidthButton title="Redeemable NFT"/></div>
    <div style={{width: '100vw'}} onClick={()=>setType(3)}><FullWidthButton title="Traditional"/></div>

    <div style={{
      display: 'flex',
      textAlign: 'center',
      fontSize: '18px',
      marginTop: '5vh',
      maxWidth: '50em',
      fontWeight: 'bold',
    }} id="table1">

      <div className="itemColumn">
        <div className="titleRowPadding">
        </div>
        <div className="costRow">
          <p style={{flex: 1}}>Cost</p>

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

      {type===1 &&
        <div className="supportNFTColumn">
          <div className="titleRow">
            <p className="titleP9H">Support</p>
            <p className="titleP9H">(NFT)</p>
          </div>
          <div className="costRow">
            <p >Coming Soon</p>
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
        </div>}


      {type===2 &&
        <div className="redeemableColumn">
          <div className="titleRow">
            <p className="titleP9H">Redeemable</p>
            <p className="titleP9H">(NFT)</p>
          </div>
          <div className="costRow">
            <p style={{flex: 1}}>Coming Soon</p>
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
        </div>}


      {type===3 &&
        <div className="preorderColumn">
          <div className="titleRow">
            <p className="titleP9H">Preorder</p>
            <p className="titleP9H">(Traditional)</p>
          </div>
          <div className="costRow">
            <p style={{flex: 1}}>Coming Soon</p>
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
        </div>}

    </div>
    { type === 1 &&
    <div style={{flex: 1}}>
      {props.showButton && <SupportButton/> }
    </div>}

    { type === 2 &&
    <div style={{flex: 1}}>
      {props.showButton && <R9ENFTButton/> }
    </div>}

    { type === 3 &&
    <div style={{flex: 1}}>
      {props.showButton && <PreorderButton/> }
    </div>}

    </div>
  )
}


function RedeemableCard(props) {
  return (
    <div className="fundingCard" style={{
      boxShadow: props.active===2?`3px 3px 5px 0px ${COLORS.COLORS.BLUE_DARK}`:'3px 3px 5px 0px'}}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifycontent: 'center'
      }}>
        <div style={{
            overflow: 'hidden',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
          <img
          style={{
            width: '10vw',
            position: 'absolute',
            marginTop: '-1vh'
          }}
          src={lockboxWithNFT}/>
        </div>
        <div className="fundingCardTextC8R">
          <p className="fundingCardText">Presale</p>
          <p className="fundingCardText">NFT</p>
        </div>
      </div>
    </div>
  )
}

function NonRedeemableCard(props) {
  return (

    <div className="fundingCard"  style={{
      boxShadow: props.active===1?`3px 3px 5px 0px ${COLORS.COLORS.BLUE_DARK}`:'3px 3px 5px 0px'}}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifycontent: 'center'
      }}>
        <div style={{
            overflow: 'hidden',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <img
          style={{
            width: '5vw',
            position: 'absolute',
            marginTop: '-1vh',
            marginLeft: '-1vw'
          }}
          src={opensea}/>
          <img
          style={{
            width: '5.5vw',
            position: 'absolute',
            marginTop: '1vh',
            marginLeft: '1.5vw'
          }}
          src={ftx}/>
      </div>
      <div className="fundingCardTextC8R">
        <p className="fundingCardText">NFT</p>
      </div>
      </div>
    </div>



  )
}

function TraditionalPreorderCard(props) {
  return (
    <div className="fundingCard"  style={{
      boxShadow: props.active===3?`3px 3px 5px 0px ${COLORS.COLORS.BLUE_DARK}` :'3px 3px 5px 0px'}}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifycontent: 'center'
      }}>
        <div style={{
            overflow: 'hidden',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          <img
          style={{
            width: '7.5vw',
            position: 'absolute',
            marginTop: '1vh'
          }}
          src={lockbox}/>
        </div>
        <div className="fundingCardTextC8R">
          <p className="fundingCardText">Presale</p>
        </div>
      </div>
    </div>
  )
}

function FundraiseOverview() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifycontent: 'center'
    }}>
      <RedeemableCard/>
      <NonRedeemableCard/>
      <TraditionalPreorderCard/>
    </div>
  )
}



function FundraisePreOrder(props) {
  const info = () => {
    return (
      <div className="saleInfoC8R">
        <p className="saleInfoLable">Price</p>
        <p>Coming Soon</p>
        <p className="saleInfoLable">Preorder Decription</p>
        <p>Purchasing a lockbox through our traditional preorder campaign means you will receive your lockbox as soon as it’s made.  All lockboxes will be shipped to customers in the order they were purchased and after all redeemable NFT purchases are fulfilled.</p>
        <p>The purchase price will cover the initial cost of the lockbox including all fees and you will receive 20% reduction in the first year subscription cost. </p>
        <p>Participating in the preorder campaign provides the company with valuable initial revenue to build the best product possible.  We value each of our early customers and you will be forever memorialized on our companies Wall Of Heroes.</p>
        <CheckoutButton title="Checkout" setAction={props.setAction} action={props.action}/>
      </div>
    )
  }

  const image = () => {
    return (
      <div className="saleInfoC8R">
        <img src={lockbox} style={{
          width: '25vw'
        }}/>
      </div>
    )
  }

  return (
    <div>
      <SalesSectionTemplate
        theme='light'
        title="Traditional Preorder Campaign">
          <div style={{paddingTop: '2em'}}>
          {window.innerWidth > smallScreenSize?
            <SideBySide
              rightSide= {info()}
              leftSide={image()}
              breakColor={COLORS.COLORS.BLUE_DARK}
            />
            :
            <OverUnder
              upper={image()}
              lower={info()}/>
          }
          </div>
      </SalesSectionTemplate>
    </div>
  )
}

function FundraiseNFT(props) {
  const info = () => {
    return (
      <div className="saleInfoC8R">
        <p className="saleInfoLable">Price</p>
        <p>Coming Soon</p>
        <p className="saleInfoLable">Decription</p>
        <p>Our NFT preorder offering is a revolutionary way to manage preorders. As an NFT holder, once lockboxes are ready to ship, all you have to do is prove you are a holder of one of these NFT’s and we will ship you your lockbox.  You keep your NFT as collectable art and proof you were one of the first to support Shipmate.</p>
        <p>NFT’s also allow for transfer of the preorder item.  If you would like to sell or transfer the NFT to another person as a gift or trade, this is made possible and requires no help or approval by Shipmate.</p>
        <p>Your purchase of the Redeemable NFT will cover the initial cost of the lockbox, the collectable art, and give you one year of 20% of the subscription.  You will also be memorialized on your Wall Of Heroes.</p>
        <CheckoutButton title="Checkout" setAction={props.action} action={true}/>
      </div>
    )
  }

  const image = () => {
    return (
      <div className="saleInfoC8R">
        <img src={lockboxWithNFT} style={{
          width: '30vw'
        }}/>
      </div>
    )
  }

  return (
    <div>
      <SalesSectionTemplate
        theme='light'
        title="Redeemable NFT">
          <div style={{paddingTop: '2em'}}>
          {window.innerWidth > smallScreenSize?
            <SideBySide
              rightSide= {info()}
              leftSide={image()}
              breakColor={COLORS.COLORS.BLUE_DARK}
            />
          :
            <OverUnder
              upper={image()}
              lower={info()}/>
        }
          </div>
      </SalesSectionTemplate>
    </div>
  )
}

function FundraiseSupportNFT(props) {
  const info = () => {
    return (
      <div className="saleInfoC8R">
        <p className="saleInfoLable">Price</p>
        <p>Coming Soon</p>
        <p className="saleInfoLable">Decription</p>
        <p>Show your support for Shipmate by purchasing a non redeemable NFT.  This item is collectable art and will forever show how you supported Shipmate with one of our first product launches.</p>
        <p>Along with keeping the collectable art forever, when you are ready to purchase a lockbox, show us this NFT and you will receive 10% off your first year subscription.</p>
        <p>You will also be memorialized on our Wall Of Heroes.</p>
        <CheckoutButton title="Checkout" setAction={props.setAction} action={props.action} />
      </div>
    )
  }

  const image = () => {
    return (
      <div className="saleInfoC8R">
        <img src={opensea} />
        <img src={ftx} />
      </div>
    )
  }

  return (
    <div>
      <SalesSectionTemplate
        title="Non Redeemable NFT">
          <div style={{paddingTop: '2em'}}>
          {window.innerWidth>smallScreenSize?
            <SideBySide
              rightSide= {info()}
              leftSide={image()}
              breakColor={COLORS.COLORS.BLUE_DARK}
            />
            :
            <OverUnder
              upper={image()}
              lower={info()}
            />

    }
    </div>
    </SalesSectionTemplate>
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
  SalesTable,
  SmallSalesTable,
  SalesTableButtons,
  FundraiseOverview,
  FundraisePreOrder,
  FundraiseNFT,
  FundraiseSupportNFT,
  FundraiseDonate,
  RedeemableCard,
  NonRedeemableCard,
  TraditionalPreorderCard
}
