import { TAU } from "../../constants";
import { circle } from "./circle";

export function puff(
    ctx: CanvasRenderingContext2D,
    time: number,
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    radiusMin: number,
    radiusMax: number
): void {
    const c = Math.cos(time * TAU);
    const s = Math.sin(time * TAU);
    radiusMax -= radiusMin;
    circle(ctx, cx - s * rx, cy + c * ry + radiusMax * 0.5, radiusMin + (1 - c * 0.5) * radiusMax);
}
