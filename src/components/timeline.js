import React, {useState, useEffect} from 'react'
import Xarrow from 'react-xarrows';

import COLORS from '../constants/theme';

import {GetDistanceToTop} from './window';
import {Section} from './sections';


function TimeElement(props) {
  return (
    <div id={props.id} className="journeyTimeElement">
      {props.children}
    </div>
  )
}

function GoalElement(props) {
  return (
    <div id={props.id} className="goalElement">
      {props.children}
    </div>
  )
}

function Timeline(props) {

  const [showArrow, setShowArrow] = useState({
    arrow1: false,
    arrow2: false,
    arrow3: false,
    arrow4: false});
  const distanceMet = GetDistanceToTop('milestone1', window.innerHeight/2);

  const handleSetArrow = () => {
      setShowArrow ({
        arrow1: !showArrow.arrow1,
        arrow2: !showArrow.arrow2,
        arrow3: !showArrow.arrow3,
        arrow4: !showArrow.arrow4,
      });
  }

  const Arrow = (props) => {
    return (
      <div>
        {props.condition && <Xarrow
          start={props.start}
          end={props.end}
          color={COLORS.COLORS.BLACK_MAIN_THEME}
          showHead={false}
          arrowBodyProps={{id: props.id}}/>}
      </div>
    )
  }

  useEffect(() => {
    if(distanceMet === true) {
      handleSetArrow();
    }
  }, [distanceMet])

  return (

    <Section
      title= "The Journey"
      note="-Where we have been and where we are going-"
      theme="light">
      <div className="journeyMainC8R">
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <TimeElement id='milestone1'>
            <h3>Problem Analysis</h3>
            <p>We spent time understanding the current delivery system, and solving its problems.</p>
          </TimeElement>
          <TimeElement id='milestone2'>
            <h2>Prototype / MVP</h2>
            <p>We have built our prototype, gathered customer feedback, analysed the results, and completed the initial product.</p>
          </TimeElement>
          <Arrow id='arrow1' start='milestone1' end='milestone2' condition={showArrow.arrow1}/>
        </div>

        <TimeElement id='milestone3'>
          <h3>Presales / Funding / NFT</h3>
          <p>We now accept presales orders.</p>
          <p>We graciously accept donations from anyone wanting to support the project.</p>
          <p>We will launch our NFT for crypto enthusiasts.</p>
        </TimeElement>
        <Arrow id="arrow2" start='milestone2' end='milestone3' condition={showArrow.arrow2}/>

        <TimeElement id='milestone4'>
          <h3>Ship Product</h3>
          <p>We will deliver preorders and begin delivering product as orders come in.</p>
        </TimeElement>
        <Arrow id="arrow3" start='milestone3' end='milestone4' condition={showArrow.arrow3}/>

        <div id='goals' className="journeyGoalC8R">
          <div style={{width: '100%', textAlign: 'center'}}><h3>First Product Updates</h3></div>
          <GoalElement>
            <p>AI Development</p>
          </GoalElement>
          <GoalElement>
            <p>Carrier Access</p>
          </GoalElement>
          <GoalElement>
            <p>Shipping</p>
          </GoalElement>
          <GoalElement>
            <p>Flawless Tracking</p>
          </GoalElement>
          <GoalElement>
            <p>Drone Deliveries</p>
          </GoalElement>
          <GoalElement>
            <p>Droid Deliveries</p>
          </GoalElement>
        </div>
        <Arrow id="arrow4" start='milestone4' end='goals' condition={showArrow.arrow4}/>

      </div>
    </Section>
  )
}



export {Timeline};
