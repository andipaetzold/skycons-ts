import { STROKE, TAU } from "../../constants";
import { IElementColors } from "../../skycons";
import { fogbank } from "../elements/fogbank";
import { line } from "../elements/line";

export function iconFog(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);
  const strokeWidth = shorter * STROKE;

  fogbank(ctx, time, width * 0.5, height * 0.32, shorter * 0.75, strokeWidth, color.light_cloud);

  time /= 5000;

  ctx.strokeStyle = color.fog;
  ctx.lineWidth = strokeWidth;

  const gapBottom = height * 0.936;

  const top1 = Math.floor(gapBottom - strokeWidth * 2.5) + 0.5;
  const gapLeft1 = Math.cos((time + 0.5) * TAU) * shorter * 0.02;
  const gapRight1 = Math.cos((time + 0.75) * TAU) * shorter * 0.02;
  line(
    ctx,
    gapLeft1 + width * 0.2 + strokeWidth * 0.5,
    top1,
    gapRight1 + width * 0.8 - strokeWidth * 0.5,
    top1
  );

  const top2 = Math.floor(gapBottom - strokeWidth * 0.5) + 0.5;
  const gapLeft2 = Math.cos(time * TAU) * shorter * 0.02;
  const gapRight2 = Math.cos((time + 0.25) * TAU) * shorter * 0.02;
  line(
    ctx,
    gapLeft2 + width * 0.2 + strokeWidth * 0.5,
    top2,
    gapRight2 + width * 0.8 - strokeWidth * 0.5,
    top2
  );
}
