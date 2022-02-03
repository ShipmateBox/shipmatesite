import React, {useState, useEffect} from 'react'
import Xarrow from 'react-xarrows';

import COLORS from '../constants/theme';

import {GetDistanceToTop} from './window';
import {Section} from './sections';


function TimeElement(props) {
  return (
    <div id={props.id} style={styles.timeElement}>
      {props.children}
    </div>
  )
}

function GoalElement(props) {
  return (
    <div id={props.id} style={styles.goalElement}>
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
      <div style={styles.mainContainer}>
        <div style={styles.timeElementContainer1}>
          <TimeElement id='milestone1'>
            <h2>Problem Analysis</h2>
            <p>We spent time understanding the currently delivery system, and solving its problems.</p>
          </TimeElement>
          <TimeElement id='milestone2'>
            <h2>Prototype / MVP</h2>
            <p>We have built our prototype, gathered customer feedback, analysed the results, and completed the initial product.</p>
          </TimeElement>
          <Arrow id='arrow1' start='milestone1' end='milestone2' condition={showArrow.arrow1}/>
        </div>

        <TimeElement id='milestone3'>
          <h2>Presales / Funding / NFT</h2>
          <p>We now accept presales orders.</p>
          <p>We graciously accept donations from anyone wanting to support the project.</p>
          <p>We will launch our NFT for crypto enthusiasts.</p>
        </TimeElement>
        <Arrow id="arrow2" start='milestone2' end='milestone3' condition={showArrow.arrow2}/>

        <TimeElement id='milestone4'>
          <h2>Products Ship</h2>
          <p>We will deliver preorders and begin delivering product as orders come in.</p>
        </TimeElement>
        <Arrow id="arrow3" start='milestone3' end='milestone4' condition={showArrow.arrow3}/>

        <div style={styles.goalContainer} id='goals'>
          <div style={styles.goalHeader}><h2>First Product Updates</h2></div>
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


const styles = {
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  goalContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '4px solid #282C34',
    margin: '5vw',
    paddingTop: '3vh'
  },
  timeElementContainer1: {
    display: 'flex',
    flexDirection: 'column'
  },
  timeElement: {
    border: '1px solid ' + COLORS.COLORS.BLACK_MAIN_THEME,
    borderRadius: 5,
    paddingTop: '3vh',
    paddingBottom: '5vh',
    paddingLeft: '3vw',
    paddingRight: '3vw',
    margin: '5vh',
    backgroundColor: COLORS.COLORS.BLACK_MAIN_THEME,
    color: 'white',
    width: '20vw'
  },
  goalHeader: {
    width: '100%',
    textAlign: 'center'
  },
  goalElement: {
    border: '4px solid ' + COLORS.COLORS.BLACK_MAIN_THEME,
    borderRadius: 2,
    paddingTop: '1vh',
    paddingBottom: '1vh',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    margin: '3vh',
    backgroundColor: 'white',
    color: '#282C34',
    width: '10vw',
    textAlign: 'center'
  }
}

export {Timeline};
