import './App.css';
import Messenger from './components/Messenger/Messenger';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/messenger" element = {<Messenger />} />
      </Routes>
    </Router>
  );
}

export default App;
