import './App.css';
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
      <header className="App-header">
        <AuthProvider>
          <div style={{ margin: '2em' }}>
            <BrowserRouter>
              <PrivateRoute exact path="/" component={homePage} />
              <PublicRoute path="/signup" component={SignUpPage} />
              <PublicRoute path="/login" component={LoginPage} />
            </BrowserRouter>
          </div>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
