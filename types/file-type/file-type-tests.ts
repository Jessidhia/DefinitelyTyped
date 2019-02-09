import fileType = require("file-type");

// $ExpectType FileTypeResult | null
fileType(new Buffer([0xff, 0xd8, 0xff]));
fileType(new Uint8Array([0xff, 0xd8, 0xff]));

// $ExpectType number
fileType.minimumBytes;
