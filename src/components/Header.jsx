import logo from '../assets/images/logo.png';
const Header = () => {
  return (
    <div className="absolute w-8/12 mx-auto left-0 right-0 px-4 py-5 flex z-10">
      <div>
        <img className='h-16' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header