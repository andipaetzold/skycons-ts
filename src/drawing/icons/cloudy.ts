import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";

export function iconCloudy(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  cloud(
    ctx,
    time,
    width * 0.5,
    height * 0.5,
    shorter,
    shorter * STROKE,
    color.light_cloud
  );
}
