import React from 'react';
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