import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import LoginButton from './components/login-button';
import Profile from './pages/user-page';
import LogoutButton from './components/logout-button';
import './index.css';
import NavBar from './components/nav-bar';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-8p7pxete6jk66ghr.us.auth0.com"
    clientId="va9ZeYRxHiV0LF2xSlt1zj1ZgnGi6mlh"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/",
    }}
  >
    {/* <LoginButton />
    <LogoutButton /> */}
    <NavBar/>
    <App />
  </Auth0Provider>,
);