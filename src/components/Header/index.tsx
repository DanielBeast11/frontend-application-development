import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.svg";
import "./styles.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar expand="lg" className="p-3">
        <NavbarBrand tag={RRNavLink} to="/">
          <img src={HomeIcon} alt="Иконка домой" />
        </NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto fs-5" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/cars">
                Автомобили
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;