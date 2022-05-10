"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUUID = exports.compareBcryptHash = exports.generateBcryptHash = exports.generatePasswordSalt = exports.generateSaltFromString = void 0;
const bcrypt = require("bcrypt");
const stringHash = require("string-hash");
const uuid = require("uuid-random");
const generateSaltFromString = async (value, stringNum) => {
    const saltStartHash = await bcrypt.genSalt();
    const saltStart = saltStartHash.substring(0, 7);
    let saltEnd = '';
    saltEnd = saltEnd.padEnd(stringNum, stringHash(value));
    saltEnd = saltEnd.substring(0, stringNum);
    return saltStart + saltEnd;
};
exports.generateSaltFromString = generateSaltFromString;
const generatePasswordSalt = (value) => (0, exports.generateSaltFromString)(value, 22);
exports.generatePasswordSalt = generatePasswordSalt;
const generateBcryptHash = (value, salt) => {
    return bcrypt.hashSync(value, salt);
};
exports.generateBcryptHash = generateBcryptHash;
const compareBcryptHash = (value, hash) => {
    return bcrypt.compare(value, hash);
};
exports.compareBcryptHash = compareBcryptHash;
const randomUUID = () => uuid();
exports.randomUUID = randomUUID;
//# sourceMappingURL=hash.js.map