
import Logo from '../../assets/logo.png'
import './Logo.css'


function Logonav() {
  
  return (
    <>
      <div className='logo'>
        <a href="https://vite.dev/guide/" target="_blank">
          <img src={Logo} className="logo react" alt="App logo" />
        </a>
      </div>
 
    </>
  )
}

export default Logonav
