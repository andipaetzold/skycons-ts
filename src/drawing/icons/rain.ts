import { STROKE } from "../../constants";
import { cloud } from "../elements/cloud";
import { rain } from "../elements/rain";

export function iconRain(ctx: CanvasRenderingContext2D, time: number, color: string): void {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;
    const s = Math.min(w, h);

    rain(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, time, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
}