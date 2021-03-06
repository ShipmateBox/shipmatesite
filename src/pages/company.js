import React, {useEffect} from 'react';

import {Timeline} from '../components/timeline';
import {Section, HalfSection} from '../components/sections';
import ReactGA from 'react-ga';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

import linkedIn from '../images/linkedIn.svg';
import twitter from '../images/twitter.svg';
import productHunt from '../images/productHunt.svg';
import {Helmet} from 'react-helmet-async';

const josh = 'https://shipmate-images.s3.us-west-2.amazonaws.com/Josh.png';
const colin = 'https://shipmate-images.s3.us-west-2.amazonaws.com/colin.png';
const dan = 'https://shipmate-images.s3.us-west-2.amazonaws.com/Dan.jpeg';

export default function Company() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname) //Google Analytics.
  }, [])

  return (
    <div
      id='about'>

      <Helmet>
        <title>company</title>
        <meta
          name="description"
          content="Everything you need to know about Shipmate Box company.  We are a startup solving the disorganized package delivery system." />
        <link rel="canonical" href="/company"/>
      </Helmet>

      <section
        className="mainC9Rfull sectionLight">
        <h1 className="sectionH2">About The Company</h1>
        <p>Shipmate Box is creating the largest and most dispersed network of home lockboxes that has ever existed.
        By selling lockboxes to suburban and rural households, we are deploying an army of data collecting package receivers.
        Each lockbox relays environmental data and delivery data to servers where it is combined with carrier logistics information,
        weather models,  crime data, public data, and traffic data.   We then analyze this data using our advanced AI to
        understand and predict delivery times for users packages.</p>

        <p>To bring this vision to life, we are adding features to the product iteratively.  Adding functionality in this way
        ensures we are getting the customer exactly what they want at the lowest price possible.  Since this is a subscription
        product, early customers can rest assured they will not miss out on the features still to come.</p>

        <p>We started this company because we see the problems that exist in the last mile delivery industry today.
        Security, weather, organization, data quality, and efficiency continue to be major problems in the primary way
        people buy everything.  We also noticed other solution do not solve the problem as they claim, and most of these
        products are $500 or more.</p>

        <p>Here at Shipmate, we want you to be confident your packages will be at your home waiting for you.  You will
        never take another day off work waiting for important packages to arrive, never rush home because that expensive
        item was delivered, never divert packages to your neighbors house or your place of work, never lose track of where your packages are.</p>

        <p>We hope you join us on our journey and participate in our pre-sales campaign. </p>
      </section>

      <Timeline/>

      <HalfSection
        theme="light"
        title="The Team">
        <div className="aboutStaff" id='team'>
          <div className="aboutImageC8R">
            <img src={josh} className="aboutStaffImage" alt="josh"/>
            <p>Josh Illenberger</p>
            <div className="aboutLogoMainC8R">
              <div className="aboutLogoC8R">
                <a href="https://www.linkedin.com/in/josh-illenberger-295a652a">
                  <img src={linkedIn} alt="linkedin logo"/>
                </a>
              </div>
            </div>
          </div>
          <div className="aboutImageC8R">
            <img src={dan} className="aboutStaffImage" alt="daniel"/>
            <p>Daniel Illenberger</p>
            <div className="aboutLogoMainC8R">
              <div className="aboutLogoC8R">
                <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b">
                  <img src={linkedIn} alt="linkedIn logo"/>
                </a>
              </div>
              <div className="aboutLogoC8R">
                <a href="https://twitter.com/DPChillenberger">
                  <img src={twitter} alt="twitter logo"/>
                </a>
              </div>
              <div className="aboutLogoC8R">
                <a href="https://www.producthunt.com/@daniel_illenberger">
                  <img src={productHunt} alt="product hunt logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="aboutImageC8R" >
            <img src={colin} className="aboutStaffImage" alt="colin"/>
            <p>Colin Nordman</p>
            <div className="aboutLogoMainC8R">
              <div className="aboutLogoC8R">
                <a href="https://www.linkedin.com/in/colin-nordman-88a48837">
                  <img src={linkedIn} alt="linkedin logo"/>
                </a>
              </div>
              <div className="aboutLogoC8R">
                <a href="https://www.producthunt.com/@colin_nordman">
                  <img src={productHunt} alt="product hunt logo"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </HalfSection>
    </div>
  )
}
