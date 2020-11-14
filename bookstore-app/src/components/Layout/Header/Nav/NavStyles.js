import styled from 'styled-components';
import {secondaryFont, typeScale} from 'styles/index';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  max-height: 64px;
  min-width: 100%;
  margin-bottom: 1rem;
  padding: 16px;

  .logo {
    font-family: ${secondaryFont};
    font-size: ${typeScale.header1};
  }

  .buttons {
    align-self: flex-end;
  }
`;
