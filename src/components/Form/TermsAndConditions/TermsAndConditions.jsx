import React from 'react'

const TermsAndConditions = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='modal__overlay'>
      <div className='modal__container'>
        <div className='modal__alignment'>
          <div className='modal__content'>
            <h2>Terms and Conditions</h2>
            <h4>All cancellation requests must be received by March 1, 2022.</h4>
            <h4>All cancellation requests are subject to a $100 cancellation fee.</h4>
            <h4>No one under the age of 16 will be allowed on the show floor.</h4>
          </div>
          <div className='btn__modal'>
            <button className='btn__modal--exit' onClick={() => close(false)}>Exit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions