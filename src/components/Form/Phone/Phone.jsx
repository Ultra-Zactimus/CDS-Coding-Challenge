import React from 'react'

const Phone = ({ phoneNumber, submitValue }) => {
  return (
    <>
      <div>
        <input 
          value={phoneNumber} 
          name="telephone"
          placeholder="Enter your Telephone number" 
          maxLength={30}
          autoComplete='on' 
          onChange={(e) => submitValue(e)}
          required
        />
      </div>
    </>
  )
}

export default Phone