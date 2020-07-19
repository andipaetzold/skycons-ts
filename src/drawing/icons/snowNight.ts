import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";
import { moon } from "../elements/moon";
import { snow } from '../elements/snow';

export function iconSnowNight(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
): void {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  moon(
    ctx,
    time,
    width * 0.667,
    height * 0.325,
    shorter * 0.75,
    shorter * STROKE * 0.8,
    color.moon
  );
  snow(
    ctx,
    time,
    width * 0.375,
    height * 0.5,
    shorter * 0.7,
    shorter * STROKE * 0.9,
    color.snow
  );
  cloud(
    ctx,
    time,
    width * 0.375,
    height * 0.5,
    shorter * 0.7,
    shorter * STROKE * 0.9,
    color.cloud
  );
}
