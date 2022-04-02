# react-native-mozjpeg
Mozjpeg for react native in pure JavaScript. Inspired by [mozjpeg-js](https://www.npmjs.com/package/mozjpeg-js)

Why another react-native compression library?
Most of the react-native compression libraries don't compress as much as server compression libraries like [sharp](https://www.npmjs.com/package/sharp). Mozjpeg will do 2-3 times better compression than other react native libraries.

As this is written in pure Javascript you will get a performance hit if you encode large images. To avoid performance hit is best to compress the image first by [react-native-image-crop-picker](https://www.npmjs.com/package/react-native-image-crop-picker) and return the image in base64 format or you can try to offload main UI js thread by using workers.

# Usage
```
$ npm i -S react-native-mozjpeg
```

Call `encode` with a file in base64 format and mozjpeg options
```javascript
const encode = require("react-native-mozjpeg");
const outData = encode(fileDataBase64, { quality: 85 });
```
