import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <Link to={props.link}>
      <div className="card">
        <h4 className="cardHeader">{props.title}</h4>
        <FontAwesomeIcon icon={faArrowRight} className="cardIcon"/>
      </div>
    </Link>
  )
}

function PreorderCard() {
  return (
    <div>
      <Card
        title="Preorder"
        link="/fundraise"/>
    </div>
  )
}

function DonateCard() {
  return (
    <div>
      <Card
        title="Show Support"
        link="/donate"/>
    </div>
  )
}

export {PreorderCard, DonateCard};
