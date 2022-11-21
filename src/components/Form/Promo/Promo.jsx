
const Promo = ({ promo, submitValue }) => {
  return (
    <>
      <div className='form__alignment'>
        <input 
          type="text" 
          maxLength={7} 
          name="promo" 
          placeholder='Enter a promo code'
          value={promo}
          onChange={(e) => submitValue(e)}
          className="form__input"
        />
      </div>
    </>
  )
}

export default Promo