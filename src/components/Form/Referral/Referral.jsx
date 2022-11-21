import React from 'react'

const Referral = ({ referral, submitValue, other, submitFeedback }) => {
  return (
    <>
      <div className='form__alignment'>
        <select 
          name="referral" 
          value={referral} 
          onChange={(e) => submitValue(e)}
          className="form__select"
          required>
          <option></option>
          <option name="socialMedia" value="socialMedia">Social Media</option>
          <option name="friend" value="friend">A Friend</option>
          <option name="email" value="email">By Email</option>
          <option name="other" value="other">Other</option>
        </select>
      </div>

      <div className='form__alignment--sections'>
        <label htmlFor="other">
          Please Specify 
          <span className="form__attention--required">*</span> 
        </label>
        <div className='form__alignment'>
          <textarea 
            name="other"
            value={other} 
            onChange={(e) => submitFeedback(e)} 
            className='form__textarea' 
            required
          >
          </textarea>
        </div>
      </div>
    </>
  )
}

export default Referral