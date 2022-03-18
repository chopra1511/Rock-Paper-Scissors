
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Mode from './components/Mode/Mode';
import PvsC from './components/Player_vs_Computer/PvsC';
import Computer from './components/Props/Computer/Computer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact>
          <Mode />
        </Route>
        <Route path={"/pc"}>
          <PvsC />
        </Route>
        <Route path={"/cc"}>
          <Computer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
