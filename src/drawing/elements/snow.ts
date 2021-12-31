import { TAU } from "../../constants";
import { line } from "./line";

export function snow(
    ctx: CanvasRenderingContext2D,
    time: number,
    gapLeft: number,
    gapTop: number,
    maxGapBetween: number,
    stroke: number,
    color: string
): void {
    time /= 3000;

    const a = maxGapBetween * 0.16;
    const lineLength = stroke * 0.75;

    const angle1 = time * TAU * 0.7;
    const line1X = Math.cos(angle1) * lineLength;
    const line1Y = Math.sin(angle1) * lineLength;

    const angle2 = angle1 + TAU / 3;
    const line2X = Math.cos(angle2) * lineLength;
    const line2Y = Math.sin(angle2) * lineLength;

    const angle3 = angle1 + (TAU * 2) / 3;
    const line3X = Math.cos(angle3) * lineLength;
    const line3Y = Math.sin(angle3) * lineLength;

    ctx.strokeStyle = color;
    ctx.lineWidth = stroke * 0.5;

    for (let i = 0; i < 4; ++i) {
        const percentage = (time + i / 4) % 1;
        const x = gapLeft + Math.sin((percentage + i / 4) * TAU) * a;
        const y = gapTop + percentage * maxGapBetween;

        line(ctx, x - line1X, y - line1Y, x + line1X, y + line1Y);
        line(ctx, x - line2X, y - line2Y, x + line2X, y + line2Y);
        line(ctx, x - line3X, y - line3Y, x + line3X, y + line3Y);
    }
}
