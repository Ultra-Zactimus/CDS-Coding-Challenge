import { useState } from 'react';
import {
  FirstName,
  LastName,
  Phone,
  Email,
  Promo,
  Referral,
  TermsAndConditions
} from './index';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    promo: '',
    referral: ''
  });

  return (
    <main>

      <p>* fields are required</p>
      <form>
        <div>
          <label htmlFor="firstName">
            Enter your First Name
            <span>*</span>
          </label>
          <FirstName firstName={formData.firstName} />
        </div>

        <div>
          <label htmlFor="lastName">
            Enter Your Last Name
            <span>*</span>
          </label>
          <LastName lastName={formData.lastName} />
        </div>

        <div>
          <label htmlFor="phone">
            Enter Your Telephone Number
            <span>*</span>
          </label>
          <Phone phone={formData.phone} />
        </div>

        <div>
          <label htmlFor="email">
            Enter a Valid Email Address
            <span>*</span>
          </label>
          <Email email={formData.email} />
        </div>

        <div>
          <label htmlFor="promo">
            Enter Your Promo Code
            <span>*</span>
          </label>
          <Promo promo={formData.promo} />
        </div>

        <div>
          <label htmlFor="referral">
            How Did You Hear About Us?
            <span>*</span>
          </label>
          <Referral referral={formData.referral} />
        </div>
        <TermsAndConditions />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default Form