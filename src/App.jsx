import React, { useState } from "react";
import Canvas from "./Canvas.jsx";

const App = () => {
  const [widthCm, setWidthCm] = useState(40);
  const [heightCm, setHeightCm] = useState(55);
  const [color, setColor] = useState("skyblue");

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Конфигуратор ящика Boxy</h1>
      <div style={styles.content}>
        <Canvas widthCm={widthCm} heightCm={heightCm} color={color} />

        <div style={styles.controls}>
          <label style={styles.label}>
            Ширина (см):
            <input
              type="number"
              value={widthCm}
              onChange={(e) => setWidthCm(Number(e.target.value))}
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Высота (см):
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Цвет:
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={styles.input}
            >
              <option value="skyblue">Небесный</option>
              <option value="lightgreen">Салатовый</option>
              <option value="lightgray">Серый</option>
              <option value="lightcoral">Розовый</option>
              <option value="beige">Бежевый</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: "Arial, sans-serif",
    background: "#f0f8ff",
    padding: "20px",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
    flexWrap: "wrap",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "250px",
    width: "100%",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "16px",
    color: "#444",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
};

export default App;
