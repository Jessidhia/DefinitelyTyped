import Pbf = require("pbf");

const pbf = new Pbf(new Uint8Array(1));
new Pbf();
new Pbf(new ArrayBuffer(8));
pbf.buf;
pbf.pos;
pbf.type;
pbf.length;
pbf.destroy();
pbf.readFields(tag => {});
pbf.readFields((tag, result) => {});
pbf.readFields((tag, result, pbf) => {});
pbf.readFields(tag => {}, {}, 1);
pbf.readMessage(tag => {});
pbf.readMessage((tag, result) => {});
pbf.readMessage((tag, result, pbf) => {});
pbf.readFixed32();
pbf.readSFixed32();
pbf.readFixed64();
pbf.readSFixed64();
pbf.readFloat();
pbf.readDouble();
pbf.readVarint();
pbf.readVarint(true);
pbf.readVarint64();
pbf.readSVarint();
pbf.readBoolean();
pbf.readString();
pbf.readBytes();
pbf.readPackedVarint();
pbf.readPackedVarint([], true);
pbf.readPackedSVarint();
pbf.readPackedSVarint([]);
pbf.readPackedBoolean();
pbf.readPackedBoolean([]);
pbf.readPackedFloat();
pbf.readPackedFloat([]);
pbf.readPackedDouble();
pbf.readPackedDouble([]);
pbf.readPackedFixed32();
pbf.readPackedFixed32([]);
pbf.readPackedSFixed32();
pbf.readPackedSFixed32([]);
pbf.readPackedFixed64();
pbf.readPackedFixed64([]);
pbf.readPackedSFixed64();
pbf.readPackedSFixed64([]);
pbf.skip(1);
pbf.writeTag(1, 2);
pbf.realloc(1);
pbf.finish();
pbf.writeFixed32(1);
pbf.writeSFixed32(1);
pbf.writeFixed64(1);
pbf.writeSFixed64(1);
pbf.writeVarint(1);
pbf.writeSVarint(1);
pbf.writeBoolean(true);
pbf.writeString("");
pbf.writeFloat(1);
pbf.writeDouble(1);
pbf.writeBytes(new Uint8Array(1));
pbf.writeRawMessage(obj => {});
pbf.writeRawMessage((obj, pbf) => {});
pbf.writeRawMessage(obj => {}, {});
pbf.writeMessage(1, obj => {});
pbf.writeMessage(1, (obj, pbf) => {});
pbf.writeMessage(1, obj => {}, {});
pbf.writePackedVarint(1, []);
pbf.writePackedSVarint(1, []);
pbf.writePackedBoolean(1, []);
pbf.writePackedFloat(1, []);
pbf.writePackedDouble(1, []);
pbf.writePackedFixed32(1, []);
pbf.writePackedSFixed32(1, []);
pbf.writePackedFixed64(1, []);
pbf.writePackedSFixed64(1, []);
pbf.writeBytesField(1, new Uint8Array(1));
pbf.writeFixed32Field(1, 2);
pbf.writeSFixed32Field(1, 2);
pbf.writeFixed64Field(1, 2);
pbf.writeSFixed64Field(1, 2);
pbf.writeVarintField(1, 2);
pbf.writeSVarintField(1, 2);
pbf.writeStringField(1, "");
pbf.writeFloatField(1, 2);
pbf.writeDoubleField(1, 2);
pbf.writeBooleanField(1, true);
