import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Notes App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
