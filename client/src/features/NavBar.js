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
<header className="header">

      <Link to="/" className="main-nav-link">
       <ul className="nested-nav-list">
         <li><img src={logo} className="logo" alt="Bookworm Logo" /></li>
         <li><p className="nav-brand">Bookworm</p></li>
       </ul>
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="search-Nav">
              <ul className="nested-nav-list">
              <li><input className="inputfield" type="text" placeholder="Search" /></li>
              <li><span className="SearchIcon">
               <MagnifyingGlass size={35} color="#228ce6" weight={SearchStyle} className="searchbutton" 
               onMouseOver={() => changeIconStyle("fill")}  onMouseOut={() => changeIconStyle("bold")} />
              </span></li>
              </ul>        
          </li>
          <li className="search-Nav-dropdown">
            <div class="dropdown">
              <span className="SearchIcon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               <MagnifyingGlass size={35} color="#228ce6" weight={SearchStyle} className="searchbutton" 
               onMouseOver={() => changeIconStyle("fill")}  onMouseOut={() => changeIconStyle("bold")} />
              </span>
                <ul class="dropdown-menu">
                 <li><input className="inputfield" type="text" placeholder="Search" /></li>
                </ul>
          </div>
          </li>
          <li><Link className="main-nav-link" href="#meals">Categories</Link></li>
          <li>
            <Link className="main-nav-link" href="#testimonials">Orders</Link>
          </li>
          <li><Link className="main-nav-link nav-cta" href="#cta">SignIn/Register</Link></li>
          <li><Link className="main-nav-link" href="#pricing"><ShoppingCart size={35} color="#228ce6" weight="fill" /></Link></li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav md hydrated" name="menu-outline" role="img" aria-label="menu outline"></ion-icon>
        <ion-icon className="icon-mobile-nav md hydrated" name="close-outline" role="img" aria-label="close outline"></ion-icon>
      </button>
    </header>
   );
  
 }

export default NavBar;
