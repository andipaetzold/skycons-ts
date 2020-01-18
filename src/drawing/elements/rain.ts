import { TAU } from "../../constants";

export function rain(
  ctx: CanvasRenderingContext2D,
  time: number,
  cx: number,
  cy: number,
  cw: number,
  stroke: number,
  color: string
): void {
  time /= 1350;

  const a = cw * 0.16;
  const b = (TAU * 11) / 12;
  const c = (TAU * 7) / 12;

  let i;
  let p;
  let x;
  let y;

  ctx.fillStyle = color;
  for (i = 4; i--; ) {
    p = (time + i / 4) % 1;
    x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
    y = cy + p * p * cw;
    ctx.beginPath();
    ctx.moveTo(x, y - stroke * 1.5);
    ctx.arc(x, y, stroke * 0.75, b, c, false);
    ctx.fill();
  }
}
