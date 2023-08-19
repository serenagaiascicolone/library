import './App.css';
import MockHome from './mock/MockHome'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'


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
    
    ]

  }
])



  return (
    <RouterProvider router={router} />
    // <MockHome />
  );
}

export default App;
