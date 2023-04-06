import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <NavLink to="/#" activeStyle>
			Home
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact 
		</NavLink>
		<NavLink to="/features" activeStyle>
			Features
		</NavLink>
		<NavLink to="/signup" activeStyle>
			Sign Up
		</NavLink>
        
		<NavLink to="/refund" activeStyle>
			Refund Policy
		</NavLink>
		
		<NavLink to="/terms" activeStyle>
			Terms
		</NavLink>
		
        <NavLink to="/pricing" activeStyle>
			Pricing
		</NavLink>
       
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
