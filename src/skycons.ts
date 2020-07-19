import { KEYFRAME } from "./constants";
import { DrawFunction } from "./DrawFunction";
import { getIconDrawingFunctionByName, IconKey } from "./icons";

export interface IElementColors {
  cloud: string;
  fog: string;
  leaf: string;
  light_cloud: string;
  moon: string;
  rain: string;
  sleet: string;
  snow: string;
  sun: string;
  wind: string;
}

export interface IConstructorOptions {
  color?: string | boolean | Partial<IElementColors>;
  resizeClear?: boolean;
}

export interface IIconElement {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  drawing: DrawFunction;
}

export class Skycons {
  private interval: number | null = null;
  private readonly resizeClear: boolean;
  private readonly list: IIconElement[] = [];

  private color: IElementColors;

  public constructor(opts: IConstructorOptions = {}) {
    this.resizeClear = opts.resizeClear || false;

    const color = opts.color || "black";
    const monochrome = typeof color === "string";

    this.color = {
      cloud: monochrome
        ? (color as string)
        : (color as IElementColors).cloud || "#666",
      fog: monochrome
        ? (color as string)
        : (color as IElementColors).fog || "#CCC",
      leaf: monochrome
        ? (color as string)
        : (color as IElementColors).leaf || "#2C5228",
      light_cloud: monochrome
        ? (color as string)
        : (color as IElementColors).light_cloud || "#888",
      moon: monochrome
        ? (color as string)
        : (color as IElementColors).moon || "#353545",
      rain: monochrome
        ? (color as string)
        : (color as IElementColors).rain || "#7FDBFF",
      sleet: monochrome
        ? (color as string)
        : (color as IElementColors).sleet || "#C2EEFF",
      snow: monochrome
        ? (color as string)
        : (color as IElementColors).snow || "#C2EEFF",
      sun: monochrome
        ? (color as string)
        : (color as IElementColors).sun || "#FFDC00",
      wind: monochrome
        ? (color as string)
        : (color as IElementColors).wind || "#777",
    };
  }

  public add(elementOrId: string | HTMLCanvasElement, draw: IconKey) {
    const canvas = this.getCanvas(elementOrId);
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const obj: IIconElement = {
      context: ctx,
      drawing: getIconDrawingFunctionByName(draw),
      element: canvas,
    };

    this.list.push(obj);
    this.draw(obj, KEYFRAME);
  }

  public set(elementOrId: string | HTMLCanvasElement, draw: IconKey) {
    const canvas = this.getCanvas(elementOrId);

    const obj = this.list.find((o) => o.element === canvas);
    if (obj) {
      obj.drawing = getIconDrawingFunctionByName(draw);
      this.draw(obj, KEYFRAME);
    } else {
      this.add(canvas, draw);
    }
  }

  public remove(elementOrId: string | HTMLCanvasElement) {
    const canvas = this.getCanvas(elementOrId);
    const i = this.list.findIndex((o) => o.element === canvas);
    if (i >= 0) {
      this.list.splice(i, 1);
    }
  }

  public draw(obj: IIconElement, time: number) {
    const canvas = obj.context.canvas;

    if (this.resizeClear) {
      canvas.width = canvas.width;
    } else {
      obj.context.clearRect(0, 0, canvas.width, canvas.height);
    }

    obj.context.lineCap = "round";
    obj.context.lineJoin = "round";

    obj.drawing(obj.context, time, this.color);
  }

  public play() {
    this.pause();

    const loop = () => {
      const now = Date.now();
      this.list.forEach((o) => this.draw(o, now));
      this.interval = requestAnimationFrame(loop);
    };

    this.interval = requestAnimationFrame(loop);
  }

  public pause() {
    if (this.interval) {
      cancelAnimationFrame(this.interval);
      this.interval = null;
    }
  }

  private getCanvas(
    elementOrId: string | HTMLCanvasElement
  ): HTMLCanvasElement {
    if (typeof elementOrId === "string") {
      return document.getElementById(elementOrId) as HTMLCanvasElement;
    } else {
      return elementOrId;
    }
  }
}
