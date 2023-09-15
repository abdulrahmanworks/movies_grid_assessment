import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import { useRoutes } from 'react-router-dom'

function AppRoutes() {
  const routes = useRoutes(
    [
      { path: '/', element: <Main /> },
      { path: '/movie/details/:id', element: <MovieDetails /> }
    ]
  )
  return routes;
}

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
