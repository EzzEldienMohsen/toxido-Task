import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home, Landing } from './pages';
import Cart from './pages/Cart';
const queryCLient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryCLient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
