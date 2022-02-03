import React, {useState, useEffect} from 'react';
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


export default function boxCycleGraphic() {

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

  return (
    <div>
      <div style={width > 500?styles.imageContainer:stylesSmall.imageContainer}>
        <img src={image} style={width > 500?styles.image:stylesSmall.image}/>
      </div>
      <div style={width > 500?styles.imageTextContainer:stylesSmall.imageTextContainer}>
        <div style={stylesSmall.textContainer}>
          <div>
            <p style={width > 500?styles.imageText2:stylesSmall.imageText2}>Make Your Deliveries</p>
          </div>
          <div>
            <p style={width > 500?styles.imageText:stylesSmall.imageText}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


const styles = {
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
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'end',
    minWidth: '200px',
  }
};

const stylesSmall = {
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
  }
}
