import styled from '@emotion/styled';
import Nav from 'components/Nav';
import React from 'react';

const Header = () => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <Header>
      <div>
        <h1>Logo</h1>
      </div>
      <Nav />
    </Header>
  );
};

export default Header;
