import './App.css';
import homePage from './pages/homePage/homePage';
import loginPage from './pages/loginPage/loginPage';
import signUpPage from './pages/signUpPage/signUpPage';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <div style={{ margin: '2em' }}>
            <BrowserRouter>
              <PrivateRoute exact path="/" component={homePage} />
              <PublicRoute path="/signup" component={signUpPage} />
              <PublicRoute path="/login" component={loginPage} />
            </BrowserRouter>
          </div>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
