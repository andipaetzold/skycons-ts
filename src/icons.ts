import { DrawFunction } from "./DrawFunction";
import { iconClearDay } from "./drawing/icons/clearDay";
import { iconClearNight } from "./drawing/icons/clearNight";
import { iconCloudy } from "./drawing/icons/cloudy";
import { iconFog } from "./drawing/icons/fog";
import { iconHail } from "./drawing/icons/hail";
import { iconPartlyCloudyDay } from "./drawing/icons/partlyCloudyDay";
import { iconPartlyCloudyNight } from "./drawing/icons/partlyCloudyNight";
import { iconRain } from "./drawing/icons/rain";
import { iconRainDay } from "./drawing/icons/rainDay";
import { iconRainNight } from "./drawing/icons/rainNight";
import { iconRainSnow } from "./drawing/icons/rainSnow";
import { iconRainSnowDay } from "./drawing/icons/rainSnowDay";
import { iconRainSnowNight } from "./drawing/icons/rainSnowNight";
import { iconSleet } from "./drawing/icons/sleet";
import { iconSnow } from "./drawing/icons/snow";
import { iconSnowDay } from "./drawing/icons/snowDay";
import { iconSnowNight } from "./drawing/icons/snowNight";
import { iconThunder } from "./drawing/icons/thunder";
import { iconThunderDay } from "./drawing/icons/thunderDay";
import { iconThunderNight } from "./drawing/icons/thunderNight";
import { iconThunderRain } from "./drawing/icons/thunderRain";
import { iconThunderRainDay } from "./drawing/icons/thunderRainDay";
import { iconThunderRainNight } from "./drawing/icons/thunderRainNight";
import { iconWind } from "./drawing/icons/wind";

export type IconKey =
  | "clear-day"
  | "clear-night"
  | "cloudy"
  | "fog"
  | "hail"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "rain"
  | "rain-snow"
  | "rain-day"
  | "rain-night"
  | "rain-snow-day"
  | "rain-snow-night"
  | "sleet"
  | "snow"
  | "snow-day"
  | "snow-night"
  | "thunder"
  | "thunder-day"
  | "thunder-night"
  | "thunder-rain"
  | "thunder-rain-day"
  | "thunder-rain-night"
  | "wind";

export enum ICON {
  CLEAR_DAY = "clear-day",
  CLEAR_NIGHT = "clear-night",
  CLOUDY = "cloudy",
  FOG = "fog",
  HAIL = "hail",
  PARTLY_CLOUDY_DAY = "partly-cloudy-day",
  PARTLY_CLOUDY_NIGHT = "partly-cloudy-night",
  RAIN = "rain",
  RAIN_SNOW = "rain-snow",
  RAIN_SNOW_DAY = "rain-snow-day",
  RAIN_SNOW_NIGHT = "rain-snow-day",
  SHOWERS_DAY = "showers-day",
  SHOWERS_NIGHT = "showers-night",
  SLEET = "sleet",
  SNOW = "snow",
  SNOW_DAY = "snow-day",
  SNOW_NIGHT = "snow-night",
  THUNDER = "thunder",
  THUNDER_DAY = "thunder-day",
  THUNDER_NIGHT = "thunder-night",
  THUNDER_RAIN_DAY = "thunder-day",
  THUNDER_RAIN_NIGHT = "thunder-night",
  WIND = "wind",
}

const iconDrawFunctionMap = new Map<IconKey, DrawFunction>([
  ["clear-day", iconClearDay],
  ["clear-night", iconClearNight],
  ["cloudy", iconCloudy],
  ["fog", iconFog],
  ["hail", iconHail],
  ["partly-cloudy-day", iconPartlyCloudyDay],
  ["partly-cloudy-night", iconPartlyCloudyNight],
  ["rain", iconRain],
  ["rain-day", iconRainDay],
  ["rain-night", iconRainNight],
  ["rain-snow", iconRainSnow],
  ["rain-snow-day", iconRainSnowDay],
  ["rain-snow-night", iconRainSnowNight],
  ["sleet", iconSleet],
  ["snow", iconSnow],
  ["snow-day", iconSnowDay],
  ["snow-night", iconSnowNight],
  ["thunder", iconThunder],
  ["thunder-day", iconThunderDay],
  ["thunder-night", iconThunderNight],
  ["thunder-rain", iconThunderRain],
  ["thunder-rain-day", iconThunderRainDay],
  ["thunder-rain-night", iconThunderRainNight],
  ["wind", iconWind],
]);

export function getIconDrawingFunctionByName(key: IconKey): DrawFunction {
  const drawFn = iconDrawFunctionMap.get(key);
  if (drawFn) {
    return drawFn;
  } else {
    throw new Error(`Invalid icon '${key}'.`);
  }
}
