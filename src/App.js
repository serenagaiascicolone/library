// MOCK
import MockHome from './mock/MockHome'
import MockNotFound from './mock/MockNotFound';
import MockBooks from './mock/MockBooks';
import MockBook from './mock/MockBook';
import MockLogin from './mock/MockLogin';

import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import NotFound from './routes/NotFound';
import Books from './routes/Books';
import Book from './routes/Book';


function App() {
const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <MockLogin />
      },
      {
        path: '/books',
        children: [
          {
            index: true,
            element: <Books />
          },
          {
            path: 'book',
            element: <Book />
          }
        ]
      }
    ]},
    {
      path: '*',
      element: <NotFound />
    }

  
])



  return (
    <RouterProvider router={router} />
    // <MockHome />
    // <MockNotFound />
  );
}

export default App;
