import Logonav from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import './Navbar.css'
import ParticlesBg from "particles-bg";

const Navbar = ({onRouteChange, isSignedin}) => {
  return (
    <div>
    <div>
     <ParticlesBg type='cobweb' bg={true} color= {"#89A2D7"} />
    </div>
    <nav className="navbar">
      <Logonav />
      <Navigation onRouteChange={onRouteChange} isSignedin={isSignedin}/>
    </nav>
    </div>
  );
};

export default Navbar;
