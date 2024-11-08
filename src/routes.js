import { AuthTabs, ForgotPasword, ResetPassword } from './pages/auth';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs></AuthTabs>
    },
    {
      path: '/forgot-password',
      element: <ForgotPasword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    }
  ]);

  return elements;
};
