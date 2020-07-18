import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  linkActive?: 'importar' | 'listagem';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  linkActive,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/" className={linkActive === 'listagem' ? 'on' : 'off'}>
          Listagem
        </Link>
        <Link to="/import" className={linkActive === 'importar' ? 'on' : 'off'}>
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
