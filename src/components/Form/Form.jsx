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
        <FirstName firstName={formData.firstName} />
        <LastName lastName={formData.lastName} />
        <Phone phone={formData.phone} />
        <Email email={formData.email} />
        <Promo promo={formData.promo} />
        <Referral referral={formData.referral} />
        <TermsAndConditions />
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Form