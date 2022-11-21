import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Image
        src="/header.png"
        alt="a picture of the cds building from afar"
        width={1500}
        height={300}
      />
      <div>
        <h1>Contact Details</h1>
      </div>
    </header>
  )
}

export default Header