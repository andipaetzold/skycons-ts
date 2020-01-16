import { IElementColors } from "./skycons";


export type DrawFunction = (
  ctx: CanvasRenderingContext2D,
  time: number,
  color: IElementColors
) => void;
