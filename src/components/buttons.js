import React, {useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Button(props) {
  return (
    <Link
      to={props.link}
      state={props.itemState}>
      <div className="card">
        <p className="cardHeader">{props.title}</p>
        <FontAwesomeIcon icon={faArrowRight} className="cardIcon"/>
      </div>
    </Link>
  )
}

function PreorderButton() {
  return (
    <div>
      <Button
        title="Preorder"
        link="/Fundraise"
        itemState={{data: 3}}/>
    </div>
  )
}

function R9ENFTButton() {
  return (
    <div>
      <Button
        title="NFT"
        link="/Fundraise"
        itemState={{data: 2}}/>
    </div>
  )
}

function SupportButton() {
  return (
    <div>
      <Button
        title="Support NFT"
        link={'/Fundraise'}
        itemState={{data: 1}}/>
    </div>
  )
}

function CheckoutButton(props) {
  return (
    <div style={props.style} className="card" onClick={() => props.setAction(props.action)}>
      <p className="cardHeader">{props.title}</p>
      <FontAwesomeIcon icon={faArrowRight} className="cardIcon"/>
    </div>
  )
}

function SubmitButton(props) {
  return (
    <button type='submit' style={{padding: '0px', background: 'none', border: 'none'}}>
      <div className="card">
        <p className="cardHeader">{props.title}</p>
      </div>
    </button>
  )
}

function FullWidthButton(props) {
  return (
    <button
      style={{padding: '0px', background: 'none', border: 'none', width: '100%'}}>
      <div className="card">
        <p className="cardHeader">{props.title}</p>
      </div>
    </button>
  )
}

export {
  PreorderButton,
  R9ENFTButton,
  SupportButton,
  CheckoutButton,
  SubmitButton,
  FullWidthButton
};
