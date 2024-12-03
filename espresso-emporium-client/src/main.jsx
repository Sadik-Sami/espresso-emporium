import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import AddCoffee from './pages/AddCoffee';
import EditCoffee from './pages/EditCoffee';
import CoffeeDetails from './pages/CoffeeDetails';
import axios from 'axios';
import Error from './pages/Error';
import SignInSignUp from './pages/SignInSignUp';
import ForgotPassword from './pages/ForgotPassword';
import AuthProvider from './context/AuthContext';
import { CustomToastProvider } from './components/CustomToastHook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'contact', element: <Contact /> },
      { path: '/add-coffee', element: <AddCoffee /> },
      {
        path: '/coffee/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <EditCoffee />,
      },
      {
        path: '/view-coffee/:id',
        loader: async ({ params }) => {
          const { data } = await axios.get(`http://localhost:5000/coffee/${params.id}`);
          return data;
        },
        element: <CoffeeDetails />,
      },
      {
        path: '/signin',
        element: <SignInSignUp />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CustomToastProvider>
      <RouterProvider router={router} />
    </CustomToastProvider>
  </AuthProvider>
);
