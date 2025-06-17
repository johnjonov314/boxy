import React, { useEffect, useRef } from "react";

const Canvas = ({ widthCm, heightCm, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pxPerCm = 10; // масштаб для удобства визуализации
    const widthPx = widthCm * pxPerCm;
    const heightPx = heightCm * pxPerCm;

    canvas.width = widthPx;
    canvas.height = heightPx;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, widthPx, heightPx);
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, widthPx, heightPx);
  }, [widthCm, heightCm, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        maxWidth: "100%",
        height: "auto",
        background: "#fff",
        border: "2px solid #87ceeb",
        borderRadius: "8px"
      }}
    />
  );
};

export default Canvas;
