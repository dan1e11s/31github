import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const onClick = () => {
    if (!value) alert('Заполните!');

    navigate(`/room/${value}`);
  };
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick}>Join conference</button>
    </>
  );
};

export default HomePage;
