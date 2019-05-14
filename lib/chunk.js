"use strict";
exports.__esModule = true;
function chunk(array, size) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
exports.chunk = chunk;
