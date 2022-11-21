
const Email = ({ email, submitValue }) => {
  return (
    <>
      <div className='form__alignment'>
        <input
          type='text'
          name="email"
          placeholder="Enter a valid Email Address"
          autoComplete='off'
          maxLength={50}
          onChange={(e) => submitValue(e)}
          className="email form__input"
          pattern="[^@]+@[^@]+\.[^@]+"
          value={email}
          required
        />
      </div>
      <p className="form__email--required">Email is required for Confirmation Email</p>
    </>
  )
}

export default Email