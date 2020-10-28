import styled from '@emotion/styled';
import React from 'react';
import {Link} from 'react-router-dom';
import {HOME, CONTACT, FAVORITES} from 'consts/routes';

const Nav = styled.nav`
a {
  text-decoration: none;
}
& > ul {
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  width: 30rem;
  & > li {
    padding: 1rem 0.5rem;
    color: #000;

    &:hover {
      background: #8ec1f5;
    }
  }
}
`;

const NavComponent = () => {

  return (
    <Nav>
      <ul>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={CONTACT}>Contacto</Link>
        </li>
        <li>
          <Link to={FAVORITES}>Favoritos</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default NavComponent;
