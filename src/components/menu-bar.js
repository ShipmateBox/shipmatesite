import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import COLORS from '../constants/theme';

import {GetWindowDimensions} from './window';

import logoIcon from '../images/LogoNoElectrodesLightMini.svg';


function MenuBar(props) {
  const {width, height} = GetWindowDimensions();
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActivate = () => {
    setMenuActive(!menuActive);
  };

  const SmallMenu = () => {
    return(
      <div style={styles.linkContainer}>
        <i style={styles.menuIcon} className="fa fa-bars" onClick={handleMenuActivate}/>
        {menuActive && (
          <ul style={styles.listHolder}>
          <li style={styles.listItem}>product</li>
          </ul>
          )}
      </div>
    )
  }


  return (
    <div style={styles.menuContainer}>
      <div style={styles.logo}>
        <img src={logoIcon} style={styles.logoIcon}/>
      </div>
      <div style={styles.padding}></div>
      { width > 500?(
      <div style={styles.linkContainer}>
        <p style={styles.firstLink}>Product</p>
        <p style={styles.middleLink}>About</p>
        <p style={styles.lastLink}>Journey</p>
      </div>
      ):(
        <SmallMenu/>
      )
      }
    </div>
  )
}

const styles = {
  menuContainer: {
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    display: 'flex',
    flex: 2,
    flexDirection: 'row'
  },
  linkContainer: {
    display: 'flex',
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logo: {
    flex: 1,
  },
  logoIcon: {
    flex: 1,
    height: 40
  },
  firstLink: {
    marginRight: '1.5%'
  },
  middleLink: {
    marginLeft: '1.5%',
    marginRight: '1.5%'
  },
  lastLink: {
    marginLeft: '1.5%'
  },
  menuIcon: {
    alignSelf: 'center'
  },
  padding: {
    flex: 4
  },
  listHolder: {
    position: 'absolute',
    top: 40,
    right: 0
  },
  listItem: {
    backgroundColor: 'white'
  }
}

export { MenuBar };
