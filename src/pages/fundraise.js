import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';

import {
  FundraisePreOrder,
  FundraiseNFT,
  FundraiseDonate,
  FundraiseSupportNFT,
  SalesTable,
  SmallSalesTable,
  RedeemableCard,
  NonRedeemableCard,
  TraditionalPreorderCard
} from '../components/funding';
import {useLocation} from 'react-router-dom';
import {HalfSection, Section} from '../components/sections';
import {PreorderButton, R9ENFTButton, SupportButton, CheckoutButton, SubmitButton} from '../components/buttons';
import {CheckoutForm, EmailForm} from '../components/forms';
import SCREENSIZE from '../constants/screenSize';
import {Helmet} from 'react-helmet-async';

const map = 'https://shipmate-images.s3.us-west-2.amazonaws.com/map_bg.png';

const ModalPlaceholder = () => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'}}
    >
      <p>We are not ready to take preorders yet, but submit your email and we will let you know when we start our preorder campaign.</p>
      <EmailForm/>
      <p>Please don't worry, we believe in customer privacy and will never sell your personal information.</p>

      <p>If you have time, please take the survey.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCHo5t1XcAwKOD100VgOYMxSBo6fNEJjjG9LsvqCGSyqYC2A/viewform?usp=sf_link">
        <SubmitButton title="Take The Survey"/></a>
    </div>
  )
}

export default function Fundraise() {
  const [saleItem, setSaleItem] = useState(1);
  const [checkout, setCheckout] = useState(false);
  let Location = useLocation();

  useEffect(() => {
    try{
      setSaleItem(Location.state.data);
    } catch(err) {
      setSaleItem(1);
    }
    window.scrollTo(0,0)
    ReactGA.pageview(window.location.pathname) //Google analytics.
  }, [])

  return (
    <div className="App">

      <Helmet>
        <title>purchase</title>
        <meta
          name="description"
          content="Purchase a lockbox today and start protecting and tracking your packages. We also have an NFT presale option for crypto fans." />
        <link rel="canonical" href="/fundraise"/>
      </Helmet>

      <section><h1 style={{textAlign: 'center'}}>Purchase Your Lockbox</h1></section>


      <FundraisePreOrder  setAction={setCheckout} action={true}/>
      { checkout &&
      <CheckoutForm title="Preorders - Coming Soon">
        <div style={{display: 'none'}}>
          <p>We will keep your information on file and notify you when your lockbox is ready.</p>
          <p>Only after you recieve the physical product will the monthly subscriptin cost start.</p>
          <p>If you ever have questions, Shipmate is always available. Feel free to contact us.</p>
          <p>Thank You :)</p>
        </div>
        <ModalPlaceholder/>
        <div className="checkoutButtonHolder">
          <CheckoutButton title="Cancel" setAction={setCheckout} action={false}/>
          <CheckoutButton style={{display: 'none'}} title="Submit" />
        </div>
      </CheckoutForm>
      }

    </div>
  )
}
