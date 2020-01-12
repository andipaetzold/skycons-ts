import { line } from "./line";

export function sleet(
  ctx: CanvasRenderingContext2D,
  time: number,
  gapleft: number,
  gapTop: number,
  circleWidth: number,
  stroke: number,
  color: string
): void {
  time /= 750;

  ctx.strokeStyle = color;
  ctx.lineWidth = stroke * 0.5;

  const gapBetween = circleWidth * 0.1875;

  for (let i = 0; i < 4; ++i) {
    const percentage = (time + i / 4) % 1;

    const x =
      Math.floor(
        gapleft + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * gapBetween
      ) + 0.5;
    const y = gapTop + percentage * circleWidth;

    line(ctx, x, y - stroke * 1.5, x, y + stroke * 1.5);
  }
}
