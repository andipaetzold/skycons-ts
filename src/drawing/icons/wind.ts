import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { swoosh } from "../elements/swoosh";

export function iconWind(ctx: CanvasRenderingContext2D, time: number, color: IElementColors): void {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const shorter = Math.min(width, height);

    swoosh(ctx, time, width * 0.5, height * 0.5, shorter, shorter * STROKE, 0, 2, color.wind, color.leaf);
    swoosh(ctx, time, width * 0.5, height * 0.5, shorter, shorter * STROKE, 1, 2, color.wind, color.leaf);
}
