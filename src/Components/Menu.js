
import React from 'react';
import { Link } from 'react-router-dom';
import CheckIn from './CheckIn';
import About from './About';
import Example from './New';
import App from './App';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <div>
                <Navbar id="def-head">
                <NavbarBrand><Link to ='/' className="link-none">SHELTERS</Link></NavbarBrand>
                    <Nav>
                        {/* <NavItem> */}
                            <NavLink className="navLink"><Link to ='/check-in' className="link-none navLink">Check In</Link></NavLink>
                            <NavLink href="/About/">About</NavLink>
                        {/* </NavItem> */}
                        {/* <NavItem>
                            <NavLink href="/About/">About</NavLink>
                        </NavItem> */}
                    </Nav>
                
                </Navbar>
            </div>
        //     <header id="def-head"> 
        //         <Link to='/'>
        //             <h4 className="logo">SHELTERS</h4>
        //         </Link>
        //         <nav>
        //         <ul>
        //             <li><Link to='/check-in'>CHECK IN</Link></li>
        //             <li><a href="checkin.html">CHECKIN</a></li>
        //             <li><Link to ='/about'>ABOUT</Link></li>
        //         </ul>
        //         </nav>
        //   </header>
        )
    }
}

export default Menu;