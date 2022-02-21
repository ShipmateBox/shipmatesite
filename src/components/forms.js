import {useState} from 'react';
import {SubmitButton} from './buttons';
import publicIp from 'public-ip';

import "aws-sdk/dist/aws-sdk";
const AWS = window.AWS;
const docClient = new AWS.DynamoDB.DocumentClient()

const geoAPIKey = '5e8a75b6b711a94bdcfa7125ec9ce400';
const geoAPIUrl = 'http://api.ipstack.com/'
// 'http://api.ipstack.com/172.221.115.192?access_key=5e8a75b6b711a94bdcfa7125ec9ce400'  <-example


function EmailForm(props) {
  const [email, setEmail] = useState({
      email: '',
      valid: ''
    });

  const [updating, setUpdating] = useState({
    updating: false,
    complete: false
  });

  const handleChange = (val) => {
    if(val.target.value.search(/.*@.*\..*/)===0 && val.target.value.length <=75) {
      setEmail({
        ...email,
        email: val.target.value,
        valid: true,
      })
    } else {
      setEmail({
        ...email,
        valid: false
      })
    }
  }

  const handleSubmit = async(event) => {
    let data = {};
    setUpdating({
      updating: true,
      complete: false,
    })

    event.preventDefault();
    const getIp = async() => await publicIp.v4
    data.ip = await publicIp.v4();

    const url = geoAPIUrl+data.ip + '?access_key=5e8a75b6b711a94bdcfa7125ec9ce400';
    try {
      const rsp = await fetch(url)
      const json = await rsp.json()
      data = {
        continent: json.continent_name,
        country: json.country_name,
        region: json.region_name,
        city: json.city,
        zip: json.zip,
        lat: json.latitude,
        long: json.longitude
      }
    } catch (err) {
      console.log(err);
    }

    if(email.valid) {
      data.email = email.email;
      console.log(data);
      try {
        const response = await fetch(
          'https://rf9pv9utfj.execute-api.us-west-2.amazonaws.com/collectEmails', {
            method: "POST",
            body: JSON.stringify(data)
          });
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.error(error);

        setUpdating({
          updating: false,
          complete: false,
        })
        return;
      }
    } else {
      setUpdating({
        updating: false,
        complete: false,
      })
      return;
    }

    setUpdating({
      updating: true,
      complete: true,
    })
    return;
  }

  if(updating.updating === false && updating.complete === false) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange = {(val) => handleChange(val)}
            autoCapitalize='none'
            className="textInput"/>
            <SubmitButton
              title="Submit"/>
        </form>
      </div>
    )
  } else if(updating.updating === true && updating.complete === false) {
      return (
        <div>
          <p>Thinking</p>
        </div>
      )
  } else {
      return(
        <div>
          <p>Thank you</p>
        </div>
      )
    }
  }

function CheckoutForm(props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="checkoutMain">
      <div className="checkoutInnerC8R">
        <p className="checkoutTitle">{props.title}</p>
        {props.children}
      </div>
    </div>
  )
}

export {
  EmailForm,
  CheckoutForm
};
