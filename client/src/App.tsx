import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Test from './components/Test'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/t' element={<Test/>}></Route>
        <Route path='/h' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
