import { KEYFRAME } from "./constants";
import { DrawFunction } from "./DrawFunction";
import { getIconDrawingFunctionByName, IconKey } from "./icons";

export interface IElementColors {
  main: string;
  moon: string;
  fog: string;
  light_cloud: string;
  cloud: string;
  snow: string;
  sleet: string;
  leaf: string;
  rain: string;
  sun: string;
}

export interface IConstructorOptions {
  monochrome?: boolean;
  color?: string;
  colors?: IElementColors;
  resizeClear: boolean;
}

export interface IIconElement {
  element: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  drawing: DrawFunction;
}

export class Skycons {
  private interval: number | null = null;
  private readonly list: IIconElement[] = [];

  private readonly opts: IConstructorOptions;

  private color: string | IElementColors;

  public constructor(opts?: IConstructorOptions) {
    this.opts = {
      color: "black",
      resizeClear: false,
      monochrome: true,
      ...opts
    };
    const optColors = this.opts.colors;
    const colors = {
      main        : "#111",
      moon        : "#353545",
      fog         : "#CCC",
      light_cloud : "#888",
      cloud       : "#666",
      snow        : "#C2EEFF",
      sleet       : "#C2EEFF",
      leaf        : "#2C5228",
      rain        : "#7FDBFF",
      sun         : "#FFDC00",
      ...optColors
    };
    if(this.opts.monochrome) {
      this.color = (opts ? opts.color : undefined) || colors.main;
    } else {
      this.color = colors;
    }
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
      element: canvas
    };

    this.list.push(obj);
    this.draw(obj, KEYFRAME);
  }

  public set(elementOrId: string | HTMLCanvasElement, draw: IconKey) {
    const canvas = this.getCanvas(elementOrId);

    const obj = this.list.find(o => o.element === canvas);
    if (obj) {
      obj.drawing = getIconDrawingFunctionByName(draw);
      this.draw(obj, KEYFRAME);
    } else {
      this.add(canvas, draw);
    }
  }

  public remove(elementOrId: string | HTMLCanvasElement) {
    const canvas = this.getCanvas(elementOrId);
    const i = this.list.findIndex(o => o.element === canvas);
    if (i >= 0) {
      this.list.splice(i, 1);
    }
  }

  public draw(obj: IIconElement, time: number) {
    const canvas = obj.context.canvas;

    if (this.opts.resizeClear) {
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
      this.list.forEach(o => this.draw(o, now));
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
