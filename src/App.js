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
import Books, { loader as BooksLoader, getBooks as getBooksLoader } from './routes/Books';
import Book, {loader as BookLoader} from './routes/Book';
import {action as LoginAction} from './components/Login';
import AddBook, {action as AddBookAction} from './routes/AddBook';
import Edit, {action as EditBookAction} from './components/Edit';
import Error from './components/Error'
import {action as DeleteAction} from './components/DeleteButton';
import  {action as LogoutAction} from './components/Logout';
import { getUserToken as tokenLoader } from './utilities/authentication';
import Authentication from './routes/Authentication';
import {action as SignupAction} from './components/Signup'



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
        loader: BooksLoader,
        element: <Home />
      },
      {
        path: 'login',
        action: LoginAction, 
        element: <Authentication />,
      },
      {
        path: 'logout',
        action: LogoutAction, 
      },
      {
        path: 'signup',
        action: SignupAction,
        element: < Authentication />,
      },
      {
        path: '/books',
        id: 'rootBooks',
        loader: getBooksLoader,
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
            element: <Edit/>
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
