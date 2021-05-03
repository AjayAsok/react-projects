import './App.css';
import SignIn, { SignInProps } from './SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SignUp } from './SignUp';
import { PwdReset } from './PwdReset';
import { createBrowserHistory as history } from "history";
import { Dashboard } from './Dashboard';

const App = () => {
  const authorisation = false;
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/forgot">
          <PwdReset />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
