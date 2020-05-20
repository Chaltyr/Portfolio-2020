import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Contact
          </DropdownToggle>
          <DropdownMenu>
            {/* <DropdownItem header>Header</DropdownItem> */}
            <DropdownItem >Github</DropdownItem>
            <DropdownItem>LinkedIn</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Contact</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>
  );
}

export default Navbar;