import {React,useState} from "react";
import logo from "../logo.png";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ShoppingCart, MagnifyingGlass } from "phosphor-react";
function NavBar() {

  const [SearchStyle, setSearchStyle] = useState();
  function changeIconStyle(style) {
    setSearchStyle(style);
  }
   return (
     <div className="container-fluid ok">
       <div className="navigationbar row">
         <div className="col-6">
          <Link to="/" className="NavLink">
           <img src={logo} width="30" height="30" className="logo" alt="Logo" />
           <p className="NavBrand">Book Worm</p>
           </Link>
         </div>
         <div className="col-6">
           <ul className="NavList">
               <li className="NavItems"><input className="inputfield" type="text" placeholder="Search" /></li>
            <li className="NavIcons">
               <MagnifyingGlass size={35} color="#3F72AF" weight={SearchStyle} className="searchbutton" 
               onMouseOver={() => changeIconStyle("fill")}  onMouseOut={() => changeIconStyle("bold")} />
            </li>
             <Link to="#" className="NavLink"><li className="NavItems">Home</li></Link>
             <Link to="#" className="NavLink"><li className="NavItems">Books</li></Link>
             <Link to="#" className="NavLink"><li className="NavItems">SignIn</li></Link>
             <Link to="#" className="NavLink"><li className="NavItems">Register</li></Link>
             <li className="NavIcons">
               <ShoppingCart size={35} color="#3F72AF" weight="fill" />
             </li>
           </ul>
         </div>
       </div>
     </div>
   );
  
                 }

export default NavBar;
