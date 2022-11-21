import React from 'react'

const Phone = ({ phoneNumber, submitValue }) => {
  return (
    <>
      <div className='form__alignment'>
        <input 
          value={phoneNumber} 
          name="telephone"
          placeholder="Enter your Telephone number" 
          maxLength={30}
          autoComplete='on' 
          onChange={(e) => submitValue(e)}
          className="form__input"
          required
        />
      </div>
    </>
  )
}

export default Phone