export function thunderbolts(
    ctx: CanvasRenderingContext2D,
    time: number,
    cx: number,
    cy: number,
    cw: number,
    color: string
) {
    time /= 1000;

    const alpha = 1 - (time % 1);
    const a = cw / 25;
    const b = Math.floor(time % 4);
    const x = cx + ((b - 1.5) / 1.5) * (b === 1 || b === 2 ? -1 : 1) * cw * 0.16;
    const y = cy;

    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;

    ctx.beginPath();
    ctx.moveTo(x - a, y - a * 5);
    ctx.lineTo(x - a * 3, y);
    ctx.lineTo(x, y);
    ctx.lineTo(x - a * 2, y + a * 5);
    ctx.lineTo(x + a * 3, y - a);
    ctx.lineTo(x, y - a);
    ctx.lineTo(x + a * 2, y - a * 5);
    ctx.closePath();
    ctx.fill();

    ctx.globalAlpha = 1;
}
