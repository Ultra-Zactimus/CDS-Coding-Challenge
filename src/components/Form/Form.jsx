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
    <div>
      <Name />
      <Phone />
      <Email />
      <Promo />
      <Referral />
      <TermsAndConditions />
    </div>
  )
}

export default Form