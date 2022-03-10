import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';

import {
  FundraiseOverview,
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


      {saleItem===1 &&
        <div>
          <FundraiseSupportNFT setAction={setCheckout} action={true}/>
          { checkout &&
          <CheckoutForm title="Non Redeemable NFT">
            <div style={{display: 'none'}}>
              <p>For ease and customer peace of mind we process all NFT sales through Opensea or FTX</p>
              <p>If you ever have questions, Shipmate is always available. Feel free to contact us.</p>
              <p>Thank You :)</p>
            </div>
            <ModalPlaceholder/>
            <div className="checkoutButtonHolder">
              <CheckoutButton title="Cancel" setAction={setCheckout} action={false}/>
              <CheckoutButton style={{display: 'none'}} title="Opensea" />
              <CheckoutButton style={{display: 'none'}} title="FTX" />
            </div>
          </CheckoutForm>
          }
        </div>
      }
      {saleItem===2 &&
        <>
          <FundraiseNFT  action={setCheckout}/>
          { checkout &&
          <CheckoutForm title="Redeemable NFT">
            <div style={{display: 'none'}}>
              <p>Hold your NFT as proof of your preorder purchase.
              When we are ready to ship the prodcut we will announce it on the site.
              Redeeming your NFT will be as simple as proving you hold the NFT in
              your wallet.</p>
              <p>Only after you recieve the physical product will the monthly subscription cost start.</p>
              <p>For ease and customer peace of mind we process all NFT sales through Opensea or FTX</p>
              <p>If you ever have questions, Shipmate is always available. Feel free to contact us.</p>
              <p>Thank You :)</p>
            </div>
            <ModalPlaceholder/>
            <div className="checkoutButtonHolder">
              <CheckoutButton title="Cancel" setAction={setCheckout} action={false}/>
              <CheckoutButton style={{display: 'none'}} title="Opensea" />
              <CheckoutButton style={{display: 'none'}} title="FTX" />
            </div>
          </CheckoutForm>
          }
        </>
      }
      {saleItem===3 &&
        <>
          <FundraisePreOrder  setAction={setCheckout} action={true}/>
          { checkout &&
          <CheckoutForm title="Traditional Preorder">
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
        </>
      }

    <div
      style={{
        margin: '2vh 2vw 10vh 2em',
        padding: '0vh 5vw'
      }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
      }}>
        <div style={{
          flex: 1,
        }}
          onClick={() => setSaleItem(1)}>
          <NonRedeemableCard active={saleItem}/>
        </div>
        <div style={{flex: 1}}
          onClick={() => setSaleItem(2)}>
          <RedeemableCard active={saleItem}/>
        </div>
        <div style={{flex: 1}}
          onClick={() => setSaleItem(3)}>
          <TraditionalPreorderCard active={saleItem}/>
        </div>
      </div>
    </div>

      <Section
        theme="light"
        title="Other Options"
        image={`url(${map})`}>
        {window.innerWidth > SCREENSIZE.SCREENSIZE.SMALL ?
          <SalesTable/>
        :
        <SmallSalesTable/>
      }
      </Section>
    </div>
  )
}
