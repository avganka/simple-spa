import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';

import UserInfo from './UserInfo';
import Avatar from '../assets/user.svg';

function Header() {
  return (
    <header>
      <Navbar bg='light' variant='light' expand={'lg'} className='shadow-sm mb-3' sticky='top'>
        <Container>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
          <Navbar.Brand to='/' as={Link}>
            Simple SPA
          </Navbar.Brand>
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-lg'
            aria-labelledby='offcanvasNavbarLabel-expand-lg'
            placement='start'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title> Simple SPA</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-start flex-grow-1 pe-3'>
                <Nav.Link as={NavLink} to='/'>
                  Список постов
                </Nav.Link>
                <Nav.Link as={NavLink} to='/about'>
                  Обо мне
                </Nav.Link>
              </Nav>
              <UserInfo avatar={Avatar} email='sasha.kalmuk@gmail.com'>
                Aleksandr
              </UserInfo>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
