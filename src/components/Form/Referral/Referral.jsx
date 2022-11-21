import React from 'react'

const Referral = ({ referral, submitValue, other, submitFeedback }) => {
  return (
    <>
      <div>
        <select 
          name="referral" 
          value={referral} 
          onChange={(e) => submitValue(e)}
          required>
          <option></option>
          <option name="socialMedia" value="socialMedia">Social Media</option>
          <option name="friend" value="friend">A Friend</option>
          <option name="email" value="email">By Email</option>
          <option name="other" value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="other">
          Please Specify 
          <span>*</span> 
        </label>
        <div>
          <textarea 
            name="other"
            value={other} 
            onChange={(e) => submitFeedback(e)} 
            required
          >
          </textarea>
        </div>
      </div>
    </>
  )
}

export default Referral