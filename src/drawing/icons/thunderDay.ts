import { STROKE } from "../../constants";
import { IElementColors } from "../../skycons";
import { cloud } from "../elements/cloud";
import { sun } from "../elements/sun";
import { thunderbolts } from "../elements/thunderbolts";

export function iconThunderDay(ctx: CanvasRenderingContext2D, time: number, color: IElementColors): void {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const shorter = Math.min(width, height);

    sun(ctx, time, width * 0.625, height * 0.325, shorter * 0.65, shorter * STROKE * 0.8, color.sun);
    thunderbolts(ctx, time, width * 0.375, height * 0.85, shorter * 0.7, color.thunder);
    cloud(ctx, time, width * 0.375, height * 0.5, shorter * 0.7, shorter * STROKE * 0.9, color.cloud);
}
