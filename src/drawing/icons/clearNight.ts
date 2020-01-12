import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { moon } from "../elements/moon";

export function iconClearNight(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string | IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  moon(ctx, time, width * 0.5, height * 0.5, shorter, shorter * STROKE, (color as IElementColors).moon || (color as string));
}
