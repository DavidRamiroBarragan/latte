import React from 'react';
import styled from '@emotion/styled';
import Nav from 'components/Nav';

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Header = () => {

  return (
    <HeaderWrapper>
      <div>
        <h1>Logo</h1>
      </div>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
