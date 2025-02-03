import React, { useRef, useEffect } from "react";
import { Arc, Square, Line, Text, Grid } from "../Logic/logic";
import myImage from "./hello.jpeg";
export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log(canvas.width, canvas.height);
    canvas.width = "800";
    canvas.height = "800";

    const ctx = canvas.getContext("2d");
    //
    // const img = new Image();
    // img.src = myImage;
    // img.onload = () => {
    // ctx.drawImage(img, 0, 200);
    // Grid(ctx);

    /*hello */
    ctx.beginPath();
    ctx.moveTo(40, 500);
    ctx.bezierCurveTo(120, 480, 220, 300, 160, 300);
    ctx.bezierCurveTo(140, 300, 100, 340, 110, 510);
    ctx.bezierCurveTo(120, 400, 200, 360, 190, 440);
    ctx.bezierCurveTo(180, 500, 200, 540, 260, 500);
    //   ctx.moveTo(260,500)
    ctx.bezierCurveTo(420, 360, 200, 360, 260, 500);

    ctx.bezierCurveTo(300, 530, 360, 490, 370, 470);
    ctx.bezierCurveTo(543, 237, 340, 240, 360, 460);
    ctx.bezierCurveTo(380, 540, 460, 510, 475, 480);
    ctx.bezierCurveTo(660, 240, 400, 240, 475, 475);
    ctx.bezierCurveTo(540, 600, 580, 360, 640, 400);
    ctx.bezierCurveTo(720, 520, 540, 560, 580, 440);
    ctx.bezierCurveTo(640, 330, 660, 460, 700, 400);

    ctx.lineWidth = 10;
    ctx.stroke();
    // /*
    let t = 0;
    const curvees = [
      [
        { x: 40, y: 500 },
        { x: 120, y: 480 },
        { x: 220, y: 300 },
        { x: 160, y: 300 },
      ],
      [
        { x: 160, y: 300 },
        { x: 140, y: 300 },
        { x: 100, y: 340 },
        { x: 110, y: 510 },
      ],
      [
        { x: 110, y: 510 },
        { x: 120, y: 400 },
        { x: 200, y: 360 },
        { x: 190, y: 440 },
      ],
      [
        { x: 190, y: 440 },
        { x: 180, y: 500 },
        { x: 200, y: 540 },
        { x: 260, y: 500 },
      ],
      [
        { x: 260, y: 500 },
        { x: 420, y: 360 },
        { x: 200, y: 360 },
        { x: 260, y: 500 },
      ],
      [
        { x: 260, y: 500 },
        { x: 300, y: 530 },
        { x: 360, y: 490 },
        { x: 370, y: 470 },
      ],
      [
        { x: 360, y: 485 },
        { x: 540, y: 240 },
        { x: 340, y: 240 },
        { x: 360, y: 460 },
      ],
      [
        { x: 360, y: 460 },
        { x: 380, y: 540 },
        { x: 460, y: 510 },
        { x: 475, y: 480 },
      ],
      [
        { x: 475, y: 480 },
        { x: 660, y: 240 },
        { x: 400, y: 240 },
        { x: 475, y: 475 },
      ],
      [
        { x: 475, y: 475 },
        { x: 540, y: 600 },
        { x: 580, y: 360 },
        { x: 640, y: 400 },
      ],
      [
        { x: 640, y: 400 },
        { x: 720, y: 520 },
        { x: 540, y: 560 },
        { x: 580, y: 440 },
      ],
      [
        { x: 580, y: 440 },
        { x: 640, y: 330 },
        { x: 660, y: 460 },
        { x: 700, y: 400 },
      ],
    ];

    function getBezierPoint(t, points) {
      const { x: x0, y: y0 } = points[0];
      const { x: x1, y: y1 } = points[1];
      const { x: x2, y: y2 } = points[2];
      const { x: x3, y: y3 } = points[3];
      //  console.log(points)
      const x =
        (1 - t) ** 3 * x0 +
        3 * (1 - t) ** 2 * t * x1 +
        3 * (1 - t) * t ** 2 * x2 +
        t ** 3 * x3;

      const y =
        (1 - t) ** 3 * y0 +
        3 * (1 - t) ** 2 * t * y1 +
        3 * (1 - t) * t ** 2 * y2 +
        t ** 3 * y3;

      return { x, y };
    }
    let np = 1200;
    function computeArcLengths(points) {
      if (!points || points.length !== 4) return null;
      const samplePoints = np;
      const distances = [0];
      let totalLength = 0;

      for (let i = 1; i <= samplePoints; i++) {
        const prev = getBezierPoint((i - 1) / samplePoints, points);
        const current = getBezierPoint(i / samplePoints, points);
        const dx = current.x - prev.x;
        const dy = current.y - prev.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        totalLength += dist;
        distances.push(totalLength);
      }

      return { totalLength, distances };
    }
    function normalizeArcLength(t, arcData) {
      if (!arcData) {
        console.error("arcData is undefined in normalizeArcLength.");
        return 0;
      }
      const { totalLength, distances } = arcData;
      const targetLength = t * totalLength;
      for (let i = 1; i < distances.length; i++) {
        if (distances[i] >= targetLength) {
          const ratio =
            (targetLength - distances[i - 1]) /
            (distances[i] - distances[i - 1]);
          return (i - 1 + ratio) / distances.length;
        }
      }
      return 1;
    }

    let progress = 0;
    let curveIndex = 0;
    const arcLengths = curvees.map(computeArcLengths).filter(Boolean);
    let r = 255,
      g = 255,
      b = 255,
      a = 0;
    function Animation() {
      // ctx.beginPath();
      // let prev = getBezierPoint(0);
      // ctx.moveTo(prev.x, prev.y);
      // for (let i = 1; i <= samplePoints; i++) {
      // const pt = getBezierPoint(i / samplePoints);
      // ctx.lineTo(pt.x, pt.y);
      // }
      // ctx.stroke();
      const currentCurve = curvees[curveIndex];
      const arcData = arcLengths[curveIndex];
      const t = normalizeArcLength(progress, arcData);
      const { x, y } = getBezierPoint(t, currentCurve);
      a += 0.01;
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
      // ctx.fillStyle = `white`;

      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.imageSmoothingEnabled=true;
      const speed = 5;
      progress += speed / arcData.totalLength;
      console.log("Progress", progress);
      if (progress <= 1) {
        requestAnimationFrame(Animation);
      } else {
        progress = 0;
        curveIndex++;
        a=0;
        // np=np+200;

        if (curveIndex < arcLengths.length) {
          requestAnimationFrame(Animation);
        }
      }
    }
    Animation();
    // */
    // }
  }, []);

  return <canvas id="board" ref={canvasRef} />;
}
