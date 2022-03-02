import React from 'react';

function SideBySide(props) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div className="cardC8R">
          {props.leftSide}
        </div>
        <div style={{borderRight: `3px solid ${props.breakColor}`, width: '0px'}}></div>
        <div className="cardC8R">
          {props.rightSide}
        </div>
      </div>
      {props.children}
    </div>
  )
}

function OverUnder(props) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div className="cardC8R">
          {props.upper}
        </div>
        <div style={{borderTop: `3px solid ${props.breakColor}`, height: '0px'}}></div>
        <div className="cardC8R">
          {props.lower}
        </div>
      </div>
      {props.children}
    </div>
  )
}


export {
  SideBySide,
  OverUnder
}
