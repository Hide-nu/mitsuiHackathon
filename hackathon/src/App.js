import './App.css';
import ShootPage from './pages/shootPage/index';
import homePage from './pages/homePage/homePage';
import LoginPage from './pages/loginPage/loginPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <div style={{ margin: '2em' }}>
            <BrowserRouter>
              <PrivateRoute exact path="/" component={homePage} />
              <PublicRoute path="/signup" component={SignUpPage} />
              <PublicRoute path="/login" component={LoginPage} />
              <PublicRoute path="/shoot" component={ShootPage} />
            </BrowserRouter>
          </div>
        </AuthProvider>
    </div>
  );
}

export default App;
