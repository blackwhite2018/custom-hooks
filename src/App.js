import React from 'react';
import useStorage from './hooks/useStorage';

const App = () => {
  const [value, setValue] = useStorage(localStorage, 'test');

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  return (
    <div>
      <input type="text" onChange={ handleChange } value={ value } />
    </div>
  );
};

export default App;
