[![npm](https://img.shields.io/npm/v/skycons-ts)](https://www.npmjs.com/package/skycons-ts)
[![downloads](https://img.shields.io/npm/dm/skycons-ts)](https://www.npmjs.com/package/skycons-ts)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/skycons-ts)](https://bundlephobia.com/package/skycons-ts)
[![license](https://img.shields.io/github/license/andipaetzold/skycons-ts)](https://github.com/andipaetzold/skycons-ts/blob/master/LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Skycons for TypeScript

This project is a fork of [Skycons by DarkSky](https://github.com/darkskyapp/skycons). Besides providing type definitions, it has more readable source code and is easier to use within a TypeScript application.

Original icons and animations were designed by DarkSky. New icons were copied from [Colored Weather Icons from skycons](https://github.com/maxdow/skycons) by @maxdown.

## Install
```bash
npm install skycons-ts
```

## Usage

```html
<canvas id="icon1" width="128" height="128"></canvas>
<canvas id="icon2" width="128" height="128"></canvas>
```

```ts
import { Skycons } from 'skycons-ts';

const skycons = new Skycons({'color': 'blue'});
// on Android, a nasty hack is needed: {'resizeClear': true}

// you can add a canvas by it's ID...
skycons.add('icon1', 'rain');

// ...or by the canvas DOM element itself.
skycons.add(document.getElementById('icon2'), 'rain');

// start animation!
skycons.play();

// you can also halt animation with skycons.pause()

// want to change the icon? no problem:
skycons.set('icon1', 'partly-cloudy-night');

// remove icon
skycons.remove('icon2');
```
