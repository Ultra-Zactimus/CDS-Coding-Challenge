
const FirstName = ({ firstName, submitValue }) => {
  return (
    <>
      <div>
        <input 
          type="text" 
          maxLength={30} 
          name="firstName"
          value={firstName}
          placeholder='Enter your First name' 
          onChange={(e) => submitValue(e)} 
          required 
        />
      </div>
    </>
  )
}

export default FirstName