import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";
import { hail } from "../elements/hail";

export function iconHail(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  hail(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    color.rain
  );
  cloud(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    color.cloud
  );
}
