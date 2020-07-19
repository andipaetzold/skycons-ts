import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";
import { rain } from "../elements/rain";
import { snow } from "../elements/snow";

export function iconRainSnow(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  rain(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    color.rain
  );
  snow(
    ctx,
    time,
    width * 0.5,
    height * 0.37,
    shorter * 0.9,
    shorter * STROKE,
    color.snow
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
