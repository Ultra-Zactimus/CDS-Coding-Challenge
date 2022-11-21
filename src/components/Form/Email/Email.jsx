
const Email = ({ email, submitValue }) => {
  return (
    <>
      <div>
        <input
          type='text'
          name="email"
          placeholder="Enter a valid Email Address"
          autoComplete='off'
          maxLength={50}
          onChange={(e) => submitValue(e)}
          className="email"
          pattern="[^@]+@[^@]+\.[^@]+"
          value={email}
          required
        />
      </div>
      <p>Email is required for Confirmation Email</p>
    </>
  )
}

export default Email