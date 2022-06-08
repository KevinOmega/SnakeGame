import { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef();

  return (
    <div className="App">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
