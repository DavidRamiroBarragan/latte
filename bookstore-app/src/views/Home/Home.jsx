import React, {useEffect} from 'react';
import {Http} from 'services/Http/httpService';

function Home() {
  useEffect(() => {
    Http.get().then(console.log);
  }, []);
  return <div>Home</div>;
}

export default Home;
