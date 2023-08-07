import './App.css';
import { Provider } from "react-redux";
import Store from "./services/Store";
import Router from "routes";


function App() {
  return (
      <Provider store={Store}>
          <Router />
      </Provider>

    );
}

export default App;
