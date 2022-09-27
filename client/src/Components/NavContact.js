import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavContact =()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ='/' >Home</Nav.Link>
            <Nav.Link as={Link} to='/List_Contact' >List Contact</Nav.Link>
            <Nav.Link as={Link} to='/Add_Contact' >Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default NavContact