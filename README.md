# IAB TCF - Decoder Only

Quick repo to demonstrate how one might include just the TCString decoder in their project.

This provides a lightweight version of just the IAB's decoder:

https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/core#installation 

This specific repo leverages `npm` with `webpack` to bundle just the required libraries to decode an IAB TCF v2 string.

The output will be a lightweight minified JS file that you can plug in locally, or use however you like.

## Requirements
- Node.js (tested with v18.11.0)
- NPM (tested with 8.19.2)

## To make your own and use:
1. Clone this repo.
2. `npm install`
3. `npx webpack --mode production` 

This produces `TCStringDecoder.js` in the `/dist` folder.

Include this as you desire in your project.


