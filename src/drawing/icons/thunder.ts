import { IElementColors } from "../../skycons";
import { cloud } from '../elements/cloud';
import { thunderbolts } from '../elements/thunderbolts';
import { STROKE } from '../../constants';

export function iconThunder(
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
) {
  const width = ctx.canvas.width;
  const height = ctx.canvas.height;
  const shorter = Math.min(width, height);

  thunderbolts(
    ctx,
    time,
    width * 0.5,
    height * 0.825,
    shorter * 0.9,
    color.thunder
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
