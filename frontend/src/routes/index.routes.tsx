import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import RegisterPage from '../pages/RegisterPage';
import { PublicPages } from '../pages/PublicPages';
import { ProtectedPages } from '../pages/PrivatePages';
import { Page404 } from '../pages/Page404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicPages />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={<Page404 />} />
      </Route>

      <Route path='/dashboard' element={<ProtectedPages />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
