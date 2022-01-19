import React, {useState, useEffect} from 'react';

import COLORS from '../constants/theme';

import {GetWindowDimensions} from './window';
import boxSecure from '../images/result.svg';
import boxPrivate from '../images/result1.svg';
import boxSecure2 from '../images/BoxSecureBigMini.svg';
import boxProtected from '../images/BoxProtectedBigMini.svg';
import boxOrganized from '../images/BoxOrganizedBigMini.svg';
import boxPrivate2 from '../images/BoxPrivateBigMini.svg';

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function Banner(props) {

  const {width, height} = GetWindowDimensions();

  const [text, setText] = useState('');
  const [image, setImage] = useState(boxSecure2);

  const test = async() => {
    const words = [['S','e','c','u','r','e'],
                  ['P','r','i','v','a','t','e'],
                  ['P','r','o','t','e','c','t','e','d'],
                  ['O','r','g','a','n','i','z','e','d']];
    const images = [boxSecure2, boxPrivate2, boxProtected, boxOrganized];
    let hold = '';
    while(true){
      for(let word in words){
        let test = words[word]
        let nextImage = images[word];
        for(let letter in test) {
          hold = hold+test[letter];
          setText(hold)
          setImage(nextImage)
          await sleep(400)
        }
        hold='';
      }
    }
  }

  useEffect(() => {

    test();
  },[]);

  return(
    <div style={width > 500?styles.mainContainer:stylesSmall.mainContainer}>
      <div style={width > 500?styles.imageContainer:stylesSmall.imageContainer}>
        <img src={image} style={width > 500?styles.image:stylesSmall.image} onClick={test}/>
      </div>
      <div style={width > 500?styles.imageTextContainer:stylesSmall.imageTextContainer}>
        <div style={stylesSmall.test}>
          <div>
            <p style={width > 500?styles.imageText2:stylesSmall.imageText2}>Make Your Deliveries</p></div>
          <div>
            <p style={width > 500?styles.imageText:stylesSmall.imageText}>{text}</p></div>
          </div>
      </div>
    </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
  },
  image: {
    height: '20vh',
    margin: 20,
    marginRight: 40,
    marginTop: 100,
    marginBottom: 100
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
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 4,
    display: 'flex',
    justifyContent: 'end',
    minWidth: '200px',
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
  test: {
    borderLeft: '4.5px solid #3D85C5',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 3,
    display: 'flex',
    minWidth: '200px',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
}

export {Banner};
