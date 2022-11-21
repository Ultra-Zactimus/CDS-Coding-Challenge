
const FirstName = ({ firstName, submitValue }) => {
  return (
    <>
      <div className='form__alignment'>
        <input 
          type="text" 
          maxLength={30} 
          name="firstName"
          value={firstName}
          placeholder='Enter your First name'
          className="name form__input"
          onChange={(e) => submitValue(e)} 
          required 
        />
      </div>
    </>
  )
}

export default FirstName