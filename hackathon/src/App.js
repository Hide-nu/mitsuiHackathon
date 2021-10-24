import './App.css';
import ShootPage from './pages/shootPage/index';
import homePage from './pages/homePage/homePage';
import LoginPage from './pages/loginPage/loginPage';
import SignUpPage from './pages/signUpPage/signUpPage';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import couponPage from './pages/couponPage/couponPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <div style={{ margin: '2em' }}>
            <BrowserRouter>
              <PrivateRoute exact path="/" component={homePage} />
              <PrivateRoute exact path="/coupon" component={couponPage} />
              <PublicRoute path="/signup" component={SignUpPage} />
              <PublicRoute path="/login" component={LoginPage} />
              <PublicRoute path="/shoot" component={ShootPage} />
            </BrowserRouter>
          </div>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
