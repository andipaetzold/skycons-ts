import { TAU } from "../../constants";

export function circle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TAU, false);
    ctx.fill();
}
