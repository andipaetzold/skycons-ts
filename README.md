[![CircleCI](https://circleci.com/gh/andipaetzold/skycons-ts/tree/master.svg?style=svg)](https://circleci.com/gh/andipaetzold/skycons-ts/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/186de4f7aa2e0aab2d24/maintainability)](https://codeclimate.com/github/andipaetzold/skycons-ts/maintainability)

# Skycons for TypeScript

This project is a fork of [Skycons by DarkSky](https://github.com/darkskyapp/skycons). Besides providing type definitions, it has more readable source code and is easier to use within a TypeScript application.

Original icons and animations were designed by DarkSky. New icons were copied from [Colored Weather Icons from skycons](https://github.com/maxdow/skycons) by @maxdown.

## Install
```bash
npm install skycons-ts --save
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
