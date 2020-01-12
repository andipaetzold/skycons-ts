import { TAU } from "../../constants";

export function leaf(
  ctx: CanvasRenderingContext2D,
  time: number,
  x: number,
  y: number,
  cw: number,
  stroke: number,
  color: string
): void {
  const a = cw / 8;
  const b = a / 3;
  const c = 2 * b;
  const d = (time % 1) * TAU;
  const e = Math.cos(d);
  const f = Math.sin(d);

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = stroke;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.arc(x, y, a, d, d + Math.PI, false);
  ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
  ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
  ctx.globalCompositeOperation = "destination-out";
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";
  ctx.stroke();
}
