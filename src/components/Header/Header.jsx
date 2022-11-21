import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
      <Image
        src="/header.png"
        alt="a picture of the cds building from afar"
        width={1500}
        height={300}
      />
      <div className='header__title--container'>
        <h1 className='header__title'>Contact Details</h1>
      </div>
    </header>
  )
}

export default Header