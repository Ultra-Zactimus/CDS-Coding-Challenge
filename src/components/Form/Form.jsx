import React from 'react';
import {
  Name,
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
        <Name />
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