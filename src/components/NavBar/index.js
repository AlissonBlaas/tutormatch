import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../../assets/images/tutormatch-logo';
import Button from '../Button';

import { colors } from '../../constants/colors';
import { NavLinkStyled, NavStyled } from './styles';

export default function App() {
  return (
    <Navbar expand='lg' bg='bg-light'>
      <Navbar.Brand href='/'>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto' />
        <NavStyled>
          <NavLinkStyled href='/Register'>Become a Tutor</NavLinkStyled>
          <Button
            text='Sign In'
            buttonColor='white'
            buttonHoverColor={colors.darkColors.lightDark}
            fontColor={colors.darkColors.lightDarkest}
            fontSize='15px'
            borderButton='1px solid'
            widthStyle='100px'
            heightStyle='40px'
            Style='100px'
          />
        </NavStyled>
      </Navbar.Collapse>
    </Navbar>
  );
}
