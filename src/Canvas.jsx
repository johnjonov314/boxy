import React, { useRef, useEffect } from "react";

const Canvas = ({ widthCm, heightCm, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpi = window.devicePixelRatio || 1;
    const widthPx = widthCm * 10;
    const heightPx = heightCm * 10;

    canvas.width = widthPx * dpi;
    canvas.height = heightPx * dpi;
    canvas.style.width = `${widthPx}px`;
    canvas.style.height = `${heightPx}px`;
    ctx.scale(dpi, dpi);

    ctx.clearRect(0, 0, widthPx, heightPx);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, widthPx, heightPx);
  }, [widthCm, heightCm, color]);

  return (
    <div style={{ border: "2px solid #87ceeb", background: "#fff", borderRadius: "8px", padding: "8px" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Canvas;
