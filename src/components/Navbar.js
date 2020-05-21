import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="Nav">
      <Nav tabs>
        <NavItem className="Nav-item">
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem className="Nav-item">
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem className="Nav-item">
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle} className="Nav-item">
          <DropdownToggle nav caret>
            Contact
          </DropdownToggle>
          <DropdownMenu>
            {/* <DropdownItem header>Header</DropdownItem> */}
            <DropdownItem className="Nav-item2" href="https://github.com/Chaltyr?tab=repositories">Github</DropdownItem>
            <DropdownItem className="Nav-item2" href="www.linkedin.com/in/louis-wong-king-dinn-22a156118">LinkedIn</DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="Nav-item2" href="/contact">Contact</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
      <style jsx>{`
        @keyframes fadeInAnimation { 
          0% { 
              opacity: 0; 
          } 
          100% { 
              opacity: 1; 
            } 
          }

        .Nav{
          background-color: black
        }
        
        .Nav-item {
          color: black;
					transition: 0.5s;
        }

        .Nav-item2 {
          color: black;
					transition: 0.5s;
        }

        .Nav-item2:hover {
          text-decoration: underline;
					background-color: black;
					color: white;
        }

        .Nav-item:hover {
          text-decoration: underline;
					background-color: white;
					color: white;
        }
      `}</style>
    </div>
  );
}

export default Navbar;