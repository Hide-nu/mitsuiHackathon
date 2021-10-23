import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <div style={{ margin: '2em' }}>
            <BrowserRouter>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </BrowserRouter>
          </div>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
