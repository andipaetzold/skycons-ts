import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";
import { rain } from "../elements/rain";

export function iconRain(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string | IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  rain(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE, (color as IElementColors).rain || (color as string));
  cloud(ctx, time, width * 0.5, height * 0.37, shorter * 0.9, shorter * STROKE, (color as IElementColors).cloud || (color as string));
}
