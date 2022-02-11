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
import {PreorderButton, R9ENFTButton, SupportButton} from '../components/buttons';
import map from '../images/map_bg.png';

export default function Fundraise() {
  const [saleItem, setSaleItem] = useState(1);
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
        <FundraiseSupportNFT/>
      }
      {saleItem===2 &&
        <FundraiseNFT/>
      }
      {saleItem===3 &&
        <FundraisePreOrder/>
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
