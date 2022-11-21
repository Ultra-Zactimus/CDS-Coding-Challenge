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
      <form>
        <FirstName />
        <LastName />
        <Phone />
        <Email />
        <Promo />
        <Referral />
        <TermsAndConditions />
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Form