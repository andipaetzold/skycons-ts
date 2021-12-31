import { puff } from "./puff";

export function puffs(
    ctx: CanvasRenderingContext2D,
    time: number,
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    radiusMin: number,
    radiusMax: number
): void {
    for (let i = 0; i < 5; ++i) {
        puff(ctx, time + i / 5, cx, cy, rx, ry, radiusMin, radiusMax);
    }
}
