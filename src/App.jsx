import React, { useEffect, useState } from "react";
import "./styles.css";
import Canvas from "./Canvas";

export default function App() {
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(55);
  const [boxHeight, setBoxHeight] = useState(60);
  const [color, setColor] = useState("Blue sky");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Введите корректный email.");
      return;
    }
    alert("Дизайн отправлен на " + email);
  };

  return (
    <div className="container">
      <Canvas widthCm={width} heightCm={height} color={color} />
      <div className="controls">
        <label>Ширина (см): <input type="number" value={width} onChange={e => setWidth(+e.target.value)} /></label>
        <label>Высота (см): <input type="number" value={height} onChange={e => setHeight(+e.target.value)} /></label>
        <label>Высота ящика (мм):
          <select value={boxHeight} onChange={e => setBoxHeight(+e.target.value)}>
            {[...Array(9)].map((_, i) => {
              const val = 20 + i * 10;
              return <option key={val} value={val}>{val}</option>;
            })}
          </select>
        </label>
        <label>Цвет:
          <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="Navy">🔵 Navy</option>
            <option value="Blue sky">🔷 Blue sky</option>
            <option value="Deep green">🟢 Deep green</option>
            <option value="Random mix">🟣 Random mix</option>
          </select>
        </label>
        <label>Email: <input type="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
        <button onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  );
}
