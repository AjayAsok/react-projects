import './App.css';
import SignIn from './SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SignUp } from './SignUp';

const App = () => {
  return (
    <Router>
      <Switch>
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
