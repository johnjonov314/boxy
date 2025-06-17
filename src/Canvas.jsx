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
    <div style={{
      border: "2px solid #00aaff",
      borderRadius: "12px",
      padding: "12px",
      background: "#ffffff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "100%",
      overflow: "auto",
      marginBottom: "20px"
    }}>
      <canvas ref={canvasRef} style={{ display: "block", margin: "0 auto" }} />
    </div>
  );
};

export default Canvas;
