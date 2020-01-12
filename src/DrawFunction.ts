import { IElementColors } from "./skycons";


export type DrawFunction = (
  ctx: CanvasRenderingContext2D,
  time: number,
  color: string | IElementColors
) => void;
