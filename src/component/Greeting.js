import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3001/api/random_greeting';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setGreeting(data.greeting);
      });
  }, []);

  return (
    <h2>
      Your greeting is:
      {' '}
      {greeting}
    </h2>
  );
}

export default Greeting;
