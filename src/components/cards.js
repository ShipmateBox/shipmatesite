import React from 'react';

function SideBySide(props) {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <div style={{
            flex: 1, display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
          {props.leftSide}
        </div>
        <div style={{width: '0px', height: '100', borderRight: `3px solid ${props.breakColor}`}}></div>
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>
          {props.rightSide}
        </div>
      </div>
      {props.children}
    </div>
  )
}


export {
  SideBySide,
}
