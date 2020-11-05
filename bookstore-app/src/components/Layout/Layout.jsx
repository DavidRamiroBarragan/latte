import React from 'react';
import Header from './Header';

export default function Layout({children}) {
  return (
    <main>
      <Header />
      <div>
        {children}
      </div>
    </main>
  );
}
