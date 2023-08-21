// MOCK
import MockHome from './mock/MockHome'
import MockNotFound from './mock/MockNotFound';
import MockBooks from './mock/MockBooks';
import MockBook from './mock/MockBook';
import MockLogin from './mock/MockLogin';
import MockSignup from './mock/MockSignup';
import MockAddBook from './mock/MockAddBook';
import MockEdit from './mock/MockEdit';

import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import NotFound from './routes/NotFound';
import Books, { loader as BooksLoader } from './routes/Books';
import Book, {loader as BookLoader} from './routes/Book';
import Login from './routes/Login';
import Signup from './routes/Signup';
import AddBook from './routes/AddBook';



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
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: '/books',
        children: [
          {
            index: true,
            loader: BooksLoader,
            element: <Books />,
          },
          {
            path: ':id',
            loader: BookLoader,
            element: <Book />
          },
          {
            path: 'add',
            element: <AddBook />
          },
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
