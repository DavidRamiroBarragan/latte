import styled from '@emotion/styled';
import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
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
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Nav;
