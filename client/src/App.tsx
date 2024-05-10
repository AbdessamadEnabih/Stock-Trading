import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import Test from "./components/Test";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/t" element={<Test />}></Route>
          <Route path="/h" element={<Home />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
