import { useState } from "react";
import "./App.css";
import Test from './components/Test'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Test />
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} variant="secondary">
          Hello {count}
        </Button>
      </div>
    </>
  );
}

export default App;
