import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);
