import React from 'react';

import '../App.css';

import BoxSecure from '../images/result.svg';

import MenuBar from '../components/menu-bar';
import {Banner} from '../components/banner';
import {
  SectionAffordances,
  SectionTech,
  SectionTimeline,
  SectionSales,
  SectionFooter
} from '../components/sections';

export default function Home() {
  return (
    <div className="App">
      <Banner/>
      <SectionAffordances/>
      <SectionTech/>
      <SectionSales/>
      <SectionTimeline/>
    </div>

  )
}
