import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [color, setColor] = useState("#87ceeb");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width * 10;
    canvas.height = height * 10;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [width, height, color]);

  return (
    <div className="container">
      <h1>🧱 Boxy Configurator</h1>
      <div className="controls">
        <label>
          Width (cm):
          <input type="number" value={width} onChange={e => setWidth(e.target.value)} />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        </label>
        <label>
          Color:
          <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        </label>
      </div>
      <canvas ref={canvasRef} className="canvas-preview" />
    </div>
  );
}
