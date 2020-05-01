import React from 'react';

import { Container } from './styles';

import NavBar from '../../components/NavBar';
import StartSection from './StartSection';
import TutorsSection from './TutorsSection';

const HomePage = () => (
  <Container>
    <NavBar />
    <StartSection />
    <TutorsSection />
  </Container>
);

export default HomePage;
