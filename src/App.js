import logo from './logo.svg';
import './App.css';

import BoxSecure from './images/result.svg';

import {MenuBar} from './components/menu-bar';
import {Banner} from './components/banner';
import {
  SectionAffordances,
  SectionTech,
  SectionTimeline,
  SectionFunding
} from './components/sections';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Banner/>
      <SectionAffordances/>
      <SectionTech/>
      <SectionFunding/>
      <SectionTimeline/>
      <footer>
      </footer>
    </div>
  );
}


export default App;
