import { DrawFunction } from "./DrawFunction";
import { iconClearDay } from "./drawing/icons/clearDay";
import { iconClearNight } from "./drawing/icons/clearNight";
import { iconCloudy } from "./drawing/icons/cloudy";
import { iconFog } from "./drawing/icons/fog";
import { iconPartlyCloudyDay } from "./drawing/icons/partlyCloudyDay";
import { iconPartlyCloudyNight } from "./drawing/icons/partlyCloudyNight";
import { iconRain } from "./drawing/icons/rain";
import { iconSleet } from "./drawing/icons/sleet";
import { iconSnow } from "./drawing/icons/snow";
import { iconWind } from "./drawing/icons/wind";

export type IconKey =
  | "clear-day"
  | "clear-night"
  | "cloudy"
  | "fog"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "rain"
  | "sleet"
  | "snow"
  | "wind";

export enum ICON {
  CLEAR_DAY = "clear-day",
  CLEAR_NIGHT = "clear-night",
  CLOUDY = "cloudy",
  FOG = "fog",
  PARTLY_CLOUDY_DAY = "partly-cloudy-day",
  PARTLY_CLOUDY_NIGHT = "partly-cloudy-night",
  RAIN = "rain",
  SLEET = "sleet",
  SNOW = "snow",
  WIND = "wind",
}

const iconDrawFunctionMap = new Map<IconKey, DrawFunction>([
  ["clear-day", iconClearDay],
  ["clear-night", iconClearNight],
  ["cloudy", iconCloudy],
  ["fog", iconFog],
  ["partly-cloudy-day", iconPartlyCloudyDay],
  ["partly-cloudy-night", iconPartlyCloudyNight],
  ["rain", iconRain],
  ["sleet", iconSleet],
  ["snow", iconSnow],
  ["wind", iconWind],
]);

export function getIconDrawingFunctionByName(key: IconKey): DrawFunction {
  const drawFn = iconDrawFunctionMap.get(key);
  if (drawFn) {
    return drawFn;
  } else {
    throw new Error("Invalid icon 'name'.");
  }
}
