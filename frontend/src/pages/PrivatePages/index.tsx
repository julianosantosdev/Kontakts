import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedPages = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('@KontaktsToken');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  });
  return <>{token ? <Outlet /> : null}</>;
};

export { ProtectedPages };
