import { TAU } from "../../constants";
import { line } from "./line";

export function sun(
  ctx: CanvasRenderingContext2D,
  time: number,
  circleX: number,
  circleY: number,
  circleWidth: number,
  stroke: number,
  color: string
): void {
  time /= 120000;

  ctx.strokeStyle = color;
  ctx.lineWidth = stroke;

  const radius = circleWidth * 0.25 - stroke * 0.5;

  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, TAU, false);
  ctx.stroke();

  const innerRadius = circleWidth * 0.32 + stroke * 0.5;
  const outerRadius = circleWidth * 0.5 - stroke * 0.5;

  for (let i = 0; i < 8; ++i) {
    const p = (time + i / 8) * TAU;
    const cos = Math.cos(p);
    const sin = Math.sin(p);

    line(
      ctx,
      circleX + cos * innerRadius,
      circleY + sin * innerRadius,
      circleX + cos * outerRadius,
      circleY + sin * outerRadius
    );
  }
}
