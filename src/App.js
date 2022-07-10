import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchForm from "./components/searchForm/SearchForm";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container bg-light p-4">
          <Router>
            <Route exact path="/" component={SearchForm} />
            <Route exact path="/category/:id" component={Dashboard} />
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
