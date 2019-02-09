import imageType = require("file-type");

imageType(new Buffer([0xff, 0xd8, 0xff]));
imageType(new Uint8Array([0xff, 0xd8, 0xff]));
