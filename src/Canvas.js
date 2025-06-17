import React, { useEffect, useRef } from "react";

export default function Canvas({ widthCm, heightCm, color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const scale = 10;
    canvas.width = widthCm * scale;
    canvas.height = heightCm * scale;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = color === "Blue sky" ? "#87ceeb" : "#001f3f";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }, [widthCm, heightCm, color]);

  return <canvas ref={canvasRef} style={{ border: "2px solid #87ceeb" }} />;
}
