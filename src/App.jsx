// 📁 src/App.jsx
import React, { useState } from "react";
import Canvas from "./Canvas";
import "./styles.css";

export default function App() {
  const [widthCm, setWidthCm] = useState(40);
  const [heightCm, setHeightCm] = useState(30);
  const [color, setColor] = useState("skyblue");

  return (
    <div className="container">
      <h1>Boxy Конфигуратор</h1>
      <Canvas widthCm={widthCm} heightCm={heightCm} color={color} />

      <div className="form">
        <label>
          Ширина (см):
          <input
            type="number"
            value={widthCm}
            onChange={(e) => setWidthCm(+e.target.value)}
          />
        </label>

        <label>
          Высота (см):
          <input
            type="number"
            value={heightCm}
            onChange={(e) => setHeightCm(+e.target.value)}
          />
        </label>

        <label>
          Цвет:
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="skyblue">Голубой</option>
            <option value="lightgreen">Зелёный</option>
            <option value="salmon">Красный</option>
            <option value="lightgray">Серый</option>
          </select>
        </label>
      </div>
    </div>
  );
}
