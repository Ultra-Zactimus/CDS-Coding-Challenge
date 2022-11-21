
const LastName = ({ lastName, submitValue }) => {
  return (
    <>
      <div>
        <input 
          type="text" 
          maxLength={30} 
          name="lastName"
          value={lastName}
          placeholder='Enter your Last name' 
          onChange={(e) => submitValue(e)}
          className="name"
          required 
        />
      </div>
    </>
  )
}

export default LastName