import { useState } from "react"
import "./App.css"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="app"
      style={{ backgroundColor: color }}
    >
      <div className="button-container">
        <button
          className="btn red"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="btn blue"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="btn green"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="btn orange"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>

        <button
          className="btn purple"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>

        <button
          className="btn black"
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  )
}

export default App