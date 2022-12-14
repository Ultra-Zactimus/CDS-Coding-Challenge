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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    promo: '',
    referral: '',
    other: ''
  });

  const handleFirstName = e => {
    const firstName = e.target.value;
    setFormData({ firstName: firstName });
  };

  const handleLastName = e => {
    const lastName = e.target.value;
    setFormData({ lastName: lastName });
  };

  const formatPhoneNumber = value => {
    if (!value) return value;
  
    const number = value.replace(/[^\d]/g, "");
    const numberLength = number.length;
  
    if (numberLength < 4) return number;
  
    if (numberLength < 7) {
      return `(${number.slice(0,3)}) ${number.slice(3)}`;
    }
  
    return `(${number.slice(0, 3)}) ${number.slice(
        3,
        6,
        )}-${number.slice(6, 10)}`;
  };

  const handlePhone = e => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setFormData({ phoneNumber: formattedNumber });
  };

  const handleEmail = e => {
    const emailInput = e.target.value;
    setFormData({ email: emailInput })
  };

  const handlePromo = e => {
    const promoInput = e.target.value.replace(/[^a-z0-9]/gi, '');
    setFormData({ promo: promoInput })
  };

  const handleReferral = e => {
    if (!formData.promo) {
      const referredBy = e.target.value;
      setFormData({ referral: referredBy });
    }
  };

  const handleOther = e => {
    if (formData.referral === 'other') {
      const other = e.target.value;
      setFormData({ other: other});
    }
  };

  const handleModal = e => {
    e.preventDefault();
    setModalStatus(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      promo: '',
      referral: '',
      other: ''
    });
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  }

  return (
    <main className='form'>
      {showSuccessMessage 
        ? <h1 className='form__message--success'>Thank you for your submission</h1> 
        : <></>}
      <p className='form__message--required'>* fields are required</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form__alignment--sections'>
          <label htmlFor="firstName" className='form__message--label'>
            Enter Your First Name
            <span className="form__attention--required">*</span>
          </label>
          <FirstName firstName={formData.firstName} submitValue={handleFirstName} />
        </div>

        <div className='form__alignment--sections'>
          <label htmlFor="lastName">
            Enter Your Last Name
            <span className="form__attention--required">*</span>
          </label>
          <LastName lastName={formData.lastName} submitValue={handleLastName} />
        </div>

        <div className='form__alignment--sections'>
          <label htmlFor="phone">
            Enter Your Telephone Number
            <span className="form__attention--required">*</span>
          </label>
          <Phone phoneNumber={formData.phoneNumber} submitValue={handlePhone} />
        </div>

        <div className='form__alignment--sections'>
          <label htmlFor="email">
            Enter a Valid Email Address
            <span className="form__attention--required">*</span>
          </label>
          <Email email={formData.email} submitValue={handleEmail} />
        </div>

        <div className='form__alignment--sections'>
          {formData.promo !== ''
          ? <label htmlFor="promo" className='form__message--label'>
              Enter Your Promo Code
              <span className="form__attention--required">*</span>
            </label>
          : <label htmlFor="promo" className='form__message--label'>
              Enter Your Promo Code
            </label>}
          <Promo promo={formData.promo} submitValue={handlePromo} />
        </div>

        <div className='form__alignment--sections'>
        {formData.promo === ''
        ? <>
            <label htmlFor="referral" className='form__message--label'>
              How Did You Hear About Us? 
              <span className="form__attention--required">*</span>
            </label>
            <Referral 
              submitValue={handleReferral} 
              referral={formData.referral}
              submitFeedback={handleOther}
              other={formData.other}
            />
          </>
        : <>
            <label htmlFor="referral" className='form__message--label'>
              How Did You Hear About Us? 
            </label>
            <div className='form__alignment'>
              <select 
                name="referral" 
                value={formData.referral} 
                onChange={(e) => handleReferral(e)}
                className='form__select'
              >
                <option></option>
                <option name="socialMedia" value="socialMedia">Social Media</option>
                <option name="friend" value="friend">A Friend</option>
                <option name="email" value="email">By Email</option>
                <option name="other" value="other">Other</option>
              </select>
            </div>

            <div className='form__alignment--sections'>
              <label htmlFor="other" className='form__message--label'>
                Please Specify 
              </label>
              <div className='form__alignment'>
                <textarea 
                  name="other" 
                  id="other"
                  className='form__textarea' 
                ></textarea>
              </div>
            </div>
          </>}
        </div>

        <div className='form__checkbox--alignment'>
          <label htmlFor="terms" className='form__checkbox--text'>
            I agree to the <a href='' onClick={(e) => handleModal(e)} >Terms and Conditions</a> of this event
            <span className='form__input--required'>*</span>
          </label>
          <input type="checkbox" name="terms" className='form__checkbox' required />
        </div>

        <TermsAndConditions open={modalStatus} close={setModalStatus} />
        <button type='submit'  className='btn__form'>Submit</button>
      </form>
    </main>
  )
}

export default Form