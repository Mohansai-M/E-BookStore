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
         <div className="col-3">
          <Link to="/" className="NavLink">
           <img src={logo} className="logo" alt="Logo" />
           <p className="NavBrand">Bookworm</p>
           </Link>
         </div>
          <div className="col-5">
          <input className="inputfield" type="text" placeholder="Search" />
            <span className="SearchIcon">
               <MagnifyingGlass size={35} color="#228ce6" weight={SearchStyle} className="searchbutton" 
               onMouseOver={() => changeIconStyle("fill")}  onMouseOut={() => changeIconStyle("bold")} />
            </span>
         </div>
         <div className="col-4">
           <ul className="NavList">
             <Link to="/" className="NavLink"><li className="NavItems">Categories</li></Link>
             <Link to="/" className="NavLink"><li className="NavItems">Orders</li></Link>
             <Link to="/" className="NavLink"><li className="NavItems Account-Status">SignIn/Register</li></Link>
             <li className="NavIcons">
               <ShoppingCart size={35} color="#228ce6" weight="fill" />
             </li>
           </ul>
         </div>
       </div>
     </div>
   );
  
                 }

export default NavBar;
