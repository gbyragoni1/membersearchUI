import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MemberSearch from './components/MemberSearch'
import RouterErrorBoundary from './components/RouterErrorBoundary'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MemberSearch />,
    errorElement: <RouterErrorBoundary />
  },
  {
    path: '/members',
    element: <MemberSearch />,
    errorElement: <RouterErrorBoundary />
  },
]
);

function App() {
  return (
    <Container>
      <Row>
        <RouterProvider router={router} />
      </Row>
  </Container>
  );
}

export default App;