import logo from './logo.svg';
import './App.css';

import BoxSecure from './images/result.svg';

import {MenuBar} from './components/menu-bar';
import {Banner} from './components/banner';
import {Section, SectionFetures} from './components/sections';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Banner/>
      <Section/>
      <SectionFetures/>
        <div>end</div>
      <footer>
      </footer>
    </div>
  );
}


export default App;
