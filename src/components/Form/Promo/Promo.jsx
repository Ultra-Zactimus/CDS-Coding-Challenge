
const Promo = ({ promo, submitValue }) => {
  return (
    <>
      <div>
        <input 
          type="text" 
          maxLength={7} 
          name="promo" 
          placeholder='Enter a promo code'
          value={promo}
          onChange={(e) => submitValue(e)}
        />
      </div>
    </>
  )
}

export default Promo