import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";
import { moon } from "../elements/moon";

export function iconPartlyCloudyNight(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string | IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  moon(
    ctx,
    time,
    width * 0.667,
    height * 0.375,
    shorter * 0.75,
    shorter * STROKE,
    (color as IElementColors).moon || (color as string)
  );
  cloud(
    ctx,
    time,
    width * 0.375,
    height * 0.625,
    shorter * 0.75,
    shorter * STROKE,
    (color as IElementColors).light_cloud || (color as string)
  );
}
