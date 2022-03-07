import React from 'react'

import {Section} from './sections';


export default function Features() {
  return (
    <Section
      theme='dark'
      title='We Do More Than Just Stop Package Theft'>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: 1
          }}>
            <table style={{margin: '0px 2vw', minWidth: '250px'}}>
              <thead>
                <tr>
                  <td>
                    <h2>Current</h2>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td><p className="featureItem">Theft Protection</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Weather Protection</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Delivery Notifications</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Remote Unlock</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">High / Low Temperature Warnings</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Fast Response Unlock</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">GPS Tracking</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Lock Status Monitoring</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Works Anywhere With Cell Service</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Solar Powered</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{
            flex: 1
          }}>
            <table style={{margin: '0px 2vw', minWidth: '250px'}}>
              <thead>
                <tr>
                  <td>
                    <h2>Next</h2>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p className="featureItem">AI Enhanced Tracking</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">AI Weather Monitoring</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">AI Security Monitoring</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">One Click Carbon Offset For Deliveries</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">One Click Package Insurance</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Carrier Access</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Send Access Code By Link</p></td>
                </tr>
                <tr>
                  <td><p className="featureItem">Ship Out Of The Home</p></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{
            flex: 1
          }}>
            <table style={{margin: '0px 2vw', minWidth: '250px'}}>
              <thead>
                <tr>
                  <td>
                    <h2>Later</h2>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><p className="featureItem">Droid / Drone Access</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

    </Section>
  )
}
