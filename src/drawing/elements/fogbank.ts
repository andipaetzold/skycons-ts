import { puffs } from "./puffs";

export function fogbank(
  ctx: CanvasRenderingContext2D,
  time: number,
  cx: number,
  cy: number,
  cw: number,
  stroke: number,
  color: string
): void {
  time /= 30000;

  const a = cw * 0.21;
  const b = cw * 0.06;
  const c = cw * 0.21;
  const d = cw * 0.28;

  ctx.fillStyle = color;
  puffs(ctx, time, cx, cy, a, b, c, d);
  ctx.globalCompositeOperation = "destination-out";
  puffs(ctx, time, cx, cy, a, b, c - stroke, d - stroke);
  ctx.globalCompositeOperation = "source-over";
}
