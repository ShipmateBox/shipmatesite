import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import COLORS from '../constants/theme';
import {Link} from 'react-router-dom';

import {GetWindowDimensions} from './window';

import logoIcon from '../images/LogoNoElectrodesLightMini.svg';


function LargeMenu(props) {
  return (
    <div className="menuBarLinkC8R">
      <Link to="/fundraise" style={styles.firstLink}>
        <p>Preorder</p>
      </Link>
      <Link to="/product" style={styles.middleLink}>
        <p>Product</p>
      </Link>
      <Link to="/Company" style={styles.lastLink}>
        <p>Company</p>
      </Link>

    </div>
  )
}

function SmallMenu(props) {

  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActivate = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="menuBarLinkC8R">
      <i style={styles.menuIcon} className="fa fa-bars" onClick={handleMenuActivate}/>
      {menuActive && (
        <div className="menuBarDropdown">
          <Link
            to="/fundraise"
            onClick={handleMenuActivate}
            className="menuBarDropdownItem">
            <p>Preorder</p>
          </Link>

          <Link
            to="/product"
            onClick={handleMenuActivate}
            className="menuBarDropdownItem">
            <p>Product</p>
          </Link>

          <Link
            to="/company"
            onClick={handleMenuActivate}
            className="menuBarDropdownItem">
            <p>Company</p>
          </Link>
        </div>
        )}
    </div>
  )
}

export default function MenuBar(props) {
  const {width, height} = GetWindowDimensions();

  return (
    <div className="menuBarMainC8R">
      <Link to="/">
        <div style={styles.logo}>
          <img src={logoIcon} style={styles.logoIcon}/>
        </div>
      </Link>
      <div style={styles.padding}></div>
      { width > 500?(
        <LargeMenu/>
      ):(
        <SmallMenu/>
      )
      }
    </div>
  )
}

const styles = {
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
    right: 0,
    width: '100vw',
    backgroundColor: 'COLORS_C'
  },
  listItem: {
    backgroundColor: 'white'
  }
}
