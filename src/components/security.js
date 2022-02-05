import React from 'react';

import {Section} from './sections';
import COLORS from '../constants/theme'

import house from '../images/house.jpeg';
import door from '../images/door.jpeg';
import windowImage from '../images/window.jpeg';
import packages from '../images/packages.jpeg';
import nothingout from '../images/nothingout.jpeg';
import garage from '../images/garage.jpeg';
import upper from '../images/upperdoor.jpeg';
import right from '../images/right.jpeg';
import bottom from '../images/bottom.jpeg';
import left from '../images/left.jpeg';

// export default function Security() {
//   return (
//     <div style={styles.mainContainer}>
//       <div style={styles.subContainerFirst}>
//         <div style={styles.imageCard}>
//           <div style={styles.imageDiv}>
//             <img src={windowImage} style={styles.image}/>
//           </div>
//           <div style={styles.imageCaption}>
//             <h3>Windows Locked</h3>
//           </div>
//         </div>
//       </div>
//       <div style={styles.subContainerSecond}>
//         <div style={styles.title}>
//           <h1>Normal Home Precautions</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

function Doorpan() {
  return (

          <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
            <div style={{
              flex: 2,
              textAlign: 'end',
            }}>
              <h1 style={{marginRight: '15vw'}}>Why not our packages</h1>
            </div>
            <div style={{
              flex: 2,
            }}>
              <div style={{
                transform: 'rotate(45deg)',
                position: 'relative',
                top: '-10vh',
                overflow: 'hidden',
                width: '30vw',
                height: '30vw',

                // boxShadow: '5px 5px 5px 5px grey'
              }}>
                <img src={packages} style={{
                  transform: 'rotate(-45deg)',
                  position: 'relative',
              }} className='pan'/>
              </div>
            </div>
          </div>
  )
}


export default function Security() {
  return (
    <div>
      <div style={{
        display: 'flex',
        width: '100vw',
        height: '60vh'
      }}>

        <div style={{
          display: 'flex',
          flex: 2,
          justifyContent: 'end'
        }}>

          <div>
            <div style={{
              transform: 'rotate(45deg)',
              position: 'relative',
              left: '0vw',
              top: '0vw',
              display: 'flex',
              background: 'white',
              borderRadius: '10px'
            }}>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column'}}>
                <div style = {styles.imageDiv} className='skew'>
                    <img src={windowImage}
                      style={styles.image}/>
                </div>

                <div style = {styles.imageDiv} className='skew'>
                  <img src={door}
                    style={styles.image}/>
                </div>
              </div>

              <div style={{
                  display: 'flex',
                  flexDirection: 'column'}}>
                <div style = {styles.imageDiv} className='skew'>
                  <img src={garage}
                    style={styles.image}/>
                </div>

                <div style = {styles.imageDiv} className='skew'>
                  <img src={nothingout}
                    style={styles.image}/>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 2
        }}>
          <div style={{
            marginTop: '10vh'
          }}>
            <h1 style={{
              borderBottom: `3px solid ${COLORS.COLORS.BLUE_DARK}`,
              maxWidth: '35vw'
            }}>Normal Home Precautions</h1>
            <table style={{width: '100%', alignItems: 'center'}}>
              <tbody>
                <tr style={{margin: '25px'}}>
                  <td style={{textAlign: 'center', padding: '0px 0px'}}><h3>Locked Door</h3></td>
                  <td style={{textAlign: 'center'}}><h3>Locked Window</h3></td>
                </tr>
                <tr>
                  <td style={{textAlign: 'center'}}><h3>Nothing Out</h3></td>
                  <td style={{textAlign: 'center'}}><h3>Garage Shut</h3></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        width: '100vw',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 2,

        }}>
          <div style={{
            marginTop: '0vh'
          }}>
            <h1 style={{
              borderBottom: `3px solid ${COLORS.COLORS.BLUE_DARK}`,
              maxWidth: '30vw'
            }}>Why Not Packages</h1>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'start',
          flex: 2
        }}>

          <div>
            <div style={{
              transform: 'rotate(45deg)',
              position: 'relative',
              left: '0vw',
              top: '-10vw',
              display: 'flex'
            }}>
              <div style={{
                  display: 'flex',
                  flexDirection: 'column'}}>
                <div style = {styles.imageDiv} className='skew'>
                  <img src={upper}
                    style={{}}/>
                </div>

                <div style = {styles.imageDiv} className='skew'>
                  <img src={left}
                    style={{height: '100%'}}/>
                </div>
              </div>

              <div style={{
                  display: 'flex',
                  flexDirection: 'column'}}>
                <div style = {styles.imageDiv} className='skew'>
                  <img src={right}
                    style={{height: '100%'}}/>
                </div>

                <div style = {styles.imageDiv} className='skew'>
                  <img src={bottom}
                    style={{height: '100%'}}/>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
  },
  subContainerFirst: {
    display: 'flex',
    flex: 1
  },
  subContainerSecond: {
    flex: 1,
    borderLeft: `2px solid ${COLORS.COLORS.BLUE_DARK}`
  },
  house: {
    backgroundImage: `url(${door})`,
    backgroundSize: 'cover',
    width: '20vw',
    height: '20vh',
  },
  imageCard: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    // border: '2px solid #282C34',
    borderRadius: '10px',
    maxWidth: '400px',
    height: '50px',
    // justifySelf: 'center'
  },
  image: {
    borderRadius: '10px',
    width: '17.1vw',
    height: '17.1vw',
    transform: 'rotate(-45deg)',
    position: 'relative',
    top: '-2.5vw',
    left: '-2.4vw'
  },
  imageCaption: {
    flex: 2,
  },
  imageDiv: {
    background: COLORS.COLORS.BLUE_DARK,
    background: 'linear-gradient(59deg, rgba(61,133,198,1) 0%, rgba(111,168,220,1) 100%)',
    borderRadius: '10px',
    margin: '8px',
    overflow: 'hidden',
    width: '12vw',
    height: '12vw'
  }
}
