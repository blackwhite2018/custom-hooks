import React from 'react';
import useJsonFetch from './hooks/useJsonFetch';

const App = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
  console.log(data, loading, error);

  return (
    <div>1</div>
  );
};

export default App;
