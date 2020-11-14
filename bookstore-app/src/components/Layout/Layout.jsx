import {Container} from 'components/UI/Layout';
import React from 'react';
import Header from './Header';

export default function Layout({children}) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
