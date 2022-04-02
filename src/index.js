import _ from 'lodash';
import { decode } from 'base64-arraybuffer';
import encode from './cjpeg';

export default function encodeImage(fileDataBase64, options) {
  const arrayBuffer = decode(fileDataBase64);
  const typeArray = new Uint8Array(arrayBuffer);

  const out = encode(typeArray, options);
  return out?.data;
}
