export function hail(
    ctx: CanvasRenderingContext2D,
    time: number,
    cx: number,
    cy: number,
    cw: number,
    stroke: number,
    color: string
) {
    time /= 900;

    const a = cw * 0.16;

    ctx.fillStyle = color;

    for (let i = 8; i--; ) {
        const p = (time + i / 8) % 1;
        const x = cx + ((i - 3) / 3) * (i === 1 || i === 3 || i === 4 || i === 6 ? -1 : 1) * a;
        const y = cy + p * p * cw;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, stroke * 0.4, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}
