import { Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";

function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>About</Nav.Item>
          <Nav.Item>Shop</Nav.Item>
          <Nav.Menu title="Categories">
            <Nav.Item>Men</Nav.Item>
            <Nav.Item>Women</Nav.Item>
            <Nav.Item>Kids</Nav.Item>
          </Nav.Menu>
          <Nav.Item>Cart</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
