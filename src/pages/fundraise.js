import React, {useState, useEffect} from 'react';

import {
  FundraiseOverview,
  FundraisePreOrder,
  FundraiseNFT,
  FundraiseDonate,
  FundraiseSupportNFT,
  SalesTable,
  RedeemableCard,
  NonRedeemableCard,
  TraditionalPreorderCard
} from '../components/funding';
import {useLocation} from 'react-router-dom';
import {HalfSection, Section} from '../components/sections';
import {PreorderButton, R9ENFTButton, SupportButton, CheckoutButton} from '../components/buttons';
import {CheckoutForm} from '../components/forms';
import map from '../images/map_bg.png';

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
  }, [])

  return (
    <div className="App">


      {saleItem===1 &&
        <div>
          <FundraiseSupportNFT setAction={setCheckout} action={true}/>
          { checkout &&
          <CheckoutForm title="Non Redeemable NFT">
            <div>
              <p>For ease and customer peace of mind we process all NFT sales through Opensea or FTX</p>
              <p>If you ever have questions, Shipmate is always available. Feel free to contact us.</p>
              <p>Thank You :)</p>
            </div>
            <div className="checkoutButtonHolder">
              <CheckoutButton title="Cancle" setAction={setCheckout} action={false}/>
              <CheckoutButton title="Opensea" />
              <CheckoutButton title="FTX" />
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
            <div>
              <p>Hold your NFT as proof of your preorder purchase.
              When we are ready to ship the prodcut we will announce it on the site.
              Redeeming your NFT will be as simple as proving you hold the NFT in
              your wallet.</p>
              <p>Only after you recieve the physical product will the monthly subscription cost start.</p>
              <p>For ease and customer peace of mind we process all NFT sales through Opensea or FTX</p>
              <p>If you ever have questions, Shipmate is always available. Feel free to contact us.</p>
              <p>Thank You :)</p>
            </div>
            <div className="checkoutButtonHolder">
              <CheckoutButton title="Cancle" setAction={setCheckout} action={false}/>
              <CheckoutButton title="Opensea" />
              <CheckoutButton title="FTX" />
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
            <div>
              <p></p>
            </div>
            <div className="checkoutButtonHolder">
              <CheckoutButton title="Cancle" setAction={setCheckout} action={false}/>
              <CheckoutButton title="Submit" />
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
        <SalesTable/>
      </Section>
    </div>
  )
}
