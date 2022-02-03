import React from 'react';

import {
  FundraisePreOrder,
  FundraiseNFT,
  FundraiseDonate
} from '../components/funding';

export default function Fundraise() {
  return (
    <div className="App">
      <FundraisePreOrder/>
      <FundraiseNFT/>
      <FundraiseDonate/>
    </div>
  )
}
