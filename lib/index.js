(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['Lodash-Clone'] = {}));
}(this, function (exports) { 'use strict';

  function chunk(array, size) {
      var result = [];
      for (var i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
      }
      return result;
  }

  exports.chunk = chunk;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
