import './css/App.css';
import SearchPage from './pages/SearchPage';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Results from './pages/Results';

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/search">
          <Results />
        </Route>
      </Router>
    </div>
  );
}

export default App;
