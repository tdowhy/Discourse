import './App.css';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <AuthProvider>
            <Switch>
            <PrivateRoute exact path="/" component={ChatPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
