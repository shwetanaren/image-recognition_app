import Logonav from "./Logo.jsx";
import Navigation from "./Navigation.jsx";
import './index.css'
import ParticlesBg from "particles-bg";

const Navbar = () => {
  return (
    <div>
    <div>
     <ParticlesBg type='cobweb' bg={true} color= {"#101010"} />
    </div>
    <nav className="navbar">
      <Logonav />
      <Navigation />
    </nav>
    </div>
  );
};

export default Navbar;
