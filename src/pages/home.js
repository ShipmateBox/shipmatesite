import React from 'react';

import '../App.css';

import BoxSecure from '../images/result.svg';

import MenuBar from '../components/menu-bar';
import {Banner} from '../components/banner';

import Affordances from '../components/affordances';
import {ProductInfo} from '../components/productInfo';
import {Sales} from '../components/funding';
import Security from '../components/security';
import Features from '../components/features';


import "aws-sdk/dist/aws-sdk";
const AWS = window.AWS;

export default function Home() {
  return (
    <div className="App">
      <Banner/>
      <Affordances/>
      <Security/>
      <Features/>
      <Sales/>
    </div>

  )
}
