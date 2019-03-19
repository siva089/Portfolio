// import React from "react";
import Link from "next/link";

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
<Link href="/">
  <a>Home</a>
</Link>;
//         <Link href="/about">
//           <a>About</a>
//         </Link>
//         <Link href="/portfolio">
//           <a>Portfolio</a>
//         </Link>
//         <Link href="/blogs">
//           <a>Blogs</a>
//         </Link>
//         <Link href="/cv">
//           <a>Cv</a>
//         </Link>
//         <style jsx>{`
//           a {
//             font-size: 20px;
//             text-decoration: none;
//           }
//         `}</style>
//       </div>
//     );
//   }
// }

// export default Header;
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
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
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Siva Codes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <Link href="/">
                  <a class="nav-link port-navbar-link">Home</a>
                </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                 <Link href="/about">
          <a class="nav-link port-navbar-link">About</a>
      </Link>
              </NavItem >
              <NavItem className="port-navbar-item"> 
                 <Link href="/portfolio">
           <a class="nav-link port-navbar-link">Portfolio</a>
        </Link>
              </NavItem>
              <NavItem className="port-navbar-item">
                  <Link href="/blogs">
         <a class="nav-link port-navbar-link">Blogs</a>
          </Link>
                
              </NavItem>
              <NavItem className="port-navbar-item">
                <Link href="/cv">
     <a class="nav-link port-navbar-link">Resume</a>
         </Link>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
