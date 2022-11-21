
const LastName = ({ lastName, submitValue }) => {
  return (
    <>
      <div className='form__alignment'>
        <input 
          type="text" 
          maxLength={30} 
          name="lastName"
          value={lastName}
          placeholder='Enter your Last name' 
          onChange={(e) => submitValue(e)}
          className="name form__input"
          required 
        />
      </div>
    </>
  )
}

export default LastName