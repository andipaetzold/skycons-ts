import { TAU, TWO_OVER_SQRT_2 } from "../../constants";

export function moon(
    ctx: CanvasRenderingContext2D,
    time: number,
    cx: number,
    cy: number,
    cw: number,
    stroke: number,
    color: string
): void {
    time /= 15000;

    const a = cw * 0.29 - stroke * 0.5;
    const b = cw * 0.05;
    const c = Math.cos(time * TAU);
    const p = (c * TAU) / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = stroke;

    cx += c * b;
    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + (TAU * 7) / 8, false);
    ctx.arc(
        cx + Math.cos(p) * a * TWO_OVER_SQRT_2,
        cy + Math.sin(p) * a * TWO_OVER_SQRT_2,
        a,
        p + (TAU * 5) / 8,
        p + (TAU * 3) / 8,
        true
    );
    ctx.closePath();
    ctx.stroke();
}
