import { useRoutes } from 'react-router-dom';
import { Dashboard } from './views/dashboard/Dashboard';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />,
    },
    // {
    //   path: '*',
    //   element: <Error />,
    // },
  ]);

  return elements;
};
