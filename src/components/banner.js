import React, {useState, useEffect} from 'react';

import COLORS from '../constants/theme';
import {
  PreorderCard,
  DonateCard,
  } from './preorder';
import {GetWindowDimensions} from './window';
import boxSecure from '../images/result.svg';
import boxPrivate from '../images/result1.svg';
import boxSecure2 from '../images/BoxSecureBigMini.svg';
import boxProtected from '../images/BoxProtectedBigMini.svg';
import boxOrganized from '../images/BoxOrganizedBigMini.svg';
import boxPrivate2 from '../images/BoxPrivateBigMini.svg';
import neighborhood from '../images/neighborhood.jpeg';

const words = [['S','e','c','u','r','e'],
              ['P','r','i','v','a','t','e'],
              ['P','r','o','t','e','c','t','e','d'],
              ['O','r','g','a','n','i','z','e','d']];
const images = [boxSecure2, boxPrivate2, boxProtected, boxOrganized];

function Banner(props) {

  const {width, height} = GetWindowDimensions();

  const [text, setText] = useState('');
  const [image, setImage] = useState(boxSecure2);

  useEffect(() => {

    let count = {word: 0, letter: 0};
    let letters = '';

    const interval = setInterval(() => {

      if(count.letter == words[count.word].length+5){
        count = {word: count.word+1, letter: 0}
        letters = '';
      }
      if(count.word == words.length ) {
        count = {word: 0, letter: 0}
      }

      if(count.letter < words[count.word].length) {
        letters = letters + words[count.word][count.letter];
        setText(letters);
        setImage(images[count.word])
      }

      count.letter += 1;
    }, 250)

    return () => clearInterval(interval);

  },[]);

  return(
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${neighborhood})`,
        backgroundSize: 'cover',
        // background: "linear-gradient(335deg, rgba(61,133,197,1) 0%, rgba(256, 256,256,1) 25%)"
      }}>
      <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                height: '100%',
                paddingTop: '10vh'
      }}>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <div style={{display: 'flex',
                      flex: 1, flexDirection: 'column',
                      alignItems: 'end',
                      justifyContent: 'center',
                      paddingRight: '5%',
                      borderRight: '2px solid #3D85C5'}}>
            <h1 style={{margin: '0px'}}>Inteligent</h1>
            <h1 style={{margin: '0px'}}>Package</h1>
            <h1 style={{margin: '0px'}}>Deliveries</h1>
          </div >
            <div style={{display:
                      'flex', flex: 1,
                      flexDirection: 'column',
                      paddingLeft: '5%'}}>
              <p>A fully remote package recieving lockbox that will change the way you get deliveries.</p>
              <p>Place it anywhere on your property, control it with your phone, recieve warnings and notifications.</p>
            </div>
        </div>
        <div style={{marginTop: '5vh'}}>
          <PreorderCard/>
          <DonateCard/>
        </div>
      </div>
      <div style={{flex: 1}}>
      </div>

    </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    // background: "linear-gradient(315deg, rgba(61,133,197,1) 0%, rgba(40,44,52,1) 60%)"
  },
  image: {
    height: '20vh',
    margin: 20,
    marginRight: 40,
    marginTop: 100,
    marginBottom: 100
  },
  introContainer: {
    display: 'flex',
    width: '80%'
  },
  imageText: {
    fontSize: 30,
    margin: 3
  },
  imageText2: {
    fontSize: 30,
    margin: 3
  },
  imageTextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'end',
    minWidth: '200px',
  },
  promoContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    height: '100%',
    paddingTop: '10vh'
  }
};

const stylesSmall = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column'
  },
  image: {
    height: '20vh',
    margin: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  },
  imageText: {
    fontSize: '8vw',
    margin: 3
  },
  imageText2: {
    fontSize: '8vw',
    margin: 3
  },
  imageTextContainer: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },
  textContainer: {
    borderLeft: '4.5px solid #3D85C5',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    minWidth: '200px',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  promoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
}

export {Banner};
