import React from 'react';


import {Section, HalfSection} from '../components/sections';

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

export {
  FundraiseOverview,
  FundraisePreOrder,
  FundraiseNFT,
  FundraiseDonate
}
