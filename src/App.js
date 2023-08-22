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
import Login, {action as LoginAction} from './routes/Login';
import Signup from './routes/Signup';
import AddBook, {action as AddBookAction} from './routes/AddBook';
import Edit, {action as EditBookAction} from './components/Edit';
import Error from './components/Error'
import {action as DeleteAction} from './components/DeleteButton';
import  {action as LogoutAction} from './components/Logout';
import { getUserToken as tokenLoader } from './utilities/authentication';
function App() {
const router = createBrowserRouter ([
  {
    path: '/',
    id: 'rootLoader',
    loader: tokenLoader,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        action: LoginAction, 
        element: <Login />
      },
      {
        path: 'logout',
        action: LogoutAction, 
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
            action: AddBookAction,
            element: <AddBook />
          },
          {
            path: 'edit/:id',
            action: EditBookAction,
            element: <Edit />
          },
          {
            path: 'delete',
            action: DeleteAction,
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
