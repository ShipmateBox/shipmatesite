import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <Link to={props.link}>
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
      <Card
        title="Preorder"
        link="/fundraise"/>
    </div>
  )
}

function R9ENFTButton() {
  return (
    <div>
      <Card
        title="NFT"
        link="/donate"/>
    </div>
  )
}

function SupportButton() {
  return (
    <div>
      <Card
        title="Support NFT"
        link="/donate"/>
    </div>
  )
}

export {
  PreorderButton,
  R9ENFTButton,
  SupportButton,
};
