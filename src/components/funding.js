import React from 'react';

import {
  PreorderCard,
  DonateCard
} from './buttons';
import {Section, HalfSection} from '../components/sections';

import SCREENSIZE from '../constants/screenSize';

const smallScreenSize = SCREENSIZE.SCREENSIZE.SMALL;

function Presales(props) {
  return (
    <div style={styles.presales}>
      <h2 style={styles.subContainerHeading}>Presales</h2>
      <p>Preorder your lockbox and recieve reduced mothly costs for the first year. </p>
      <PreorderCard/>
    </div>
  )
}

function Donations() {
  return (
    <div style={styles.donations}>
      <h2 style={styles.subContainerHeading}>Show Support</h2>
      <p>The best way to support the team is through a preorder. However, if a preorder does not work for you, taking our quick survey or a donation would be greatly appriciated.</p>
      <p>Donations </p>
      <p>Take the short survey.</p>
      <DonateCard/>
    </div>
  )
}

function Nft() {
  return (
    <div style={styles.nft}>
      <h2 style={styles.subContainerHeading}>NFT's</h2>
      <p>A revolutionary way to participate in presales.  We are launching an NFT project that represents your lockbox.  When the product is complete we will deliver the product to the holder of the NFT.</p>
      <p>Get all the benefits of a normal preorder plus you will keep your NFT as proof you were one of the first.</p>
      <p>Unlike traditional preslaes, NFT's can be traded, exchanged or given as a gift.</p>
      <PreorderCard/>
    </div>
  )
}

function Sales(props) {
  return (
    <Section
      title="Sales / Support"
      note="-Every great product requires capital-"
      theme="dark">
      <div style={styles.mainContainer}>
        <div style={styles.subContainer}>
          <Presales/>
          <Donations/>
        </div>
        <div style={styles.subContainer}>
          <Nft style={styles.nft}/>
        </div>
      </div>
    </Section>
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
