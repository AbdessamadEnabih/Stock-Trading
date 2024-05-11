import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Test from "./components/Test";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/t" element={<Test />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
