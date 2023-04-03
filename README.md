# IAB TCF - Decoder Only

Quick repo to demonstrate how one might include just the TCString decoder in their project.

This provides a lightweight version of just the IAB's decoder:

https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/core#installation 

This specific repo leverages `npm` with `webpack` to bundle just the required libraries to decode an IAB TCF v2 string.

The output will be a lightweight minified JS file that you can plug in locally, or use however you like.

You can choose to bundle the TCF library yourself if you like if you already leverage webpack or an equivalent today.

## Requirements
- Node.js (tested with v18.11.0)
- NPM (tested with 8.19.2)

## To make your own:
1. Clone this repo. `git clone https://github.com/foreza/iab-tcf-decoder-built`
2. Install node packages (webpack + iab tcf core). `npm install`
3. Run webpack. `npx webpack --mode production` 

Output: this produces `TCStringDecoder.js` in the `/dist` folder.

## To use (recommended):

[Here](https://github.com/foreza/iab-tcf-decoder-built/blob/main/index.html#L25) is an example.

- Include `TCStringDecoder.js` as a standalone script.
- Use `TCString.decode(<your tcf iab string>)` - it'll output an `TCModel` object.
- Parse the `TCModel` for whatever you need.

## Resources

- [Here](https://iabtcf.com/#/decode) is the full decoder example provided by the IAB.
- [Here](https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/core#iabtcfcore) is the IAB's repository, which includes the source code for the decoder.