import {PrimaryButton} from 'components/UI/ButtonsStyles';
import useAuthContext from 'hooks/useAuthContext';
import React from 'react';
import {NavWrapper} from './NavStyles';

function NavComponent() {
  const {logout, isAuthenticated} = useAuthContext();
  return (
    <NavWrapper>
      <div className="logo">BookStoreApp</div>
      <div className="buttons">
        {isAuthenticated && (
          <PrimaryButton onClick={logout} modifiers={['small']}>
            Logout
          </PrimaryButton>
        )}
      </div>
    </NavWrapper>
  );
}

export default NavComponent;
