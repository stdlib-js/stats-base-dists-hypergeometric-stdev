// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=Math.floor,t=function(t){return e(t)===t&&t>=0},n=Math.sqrt,o=Number.POSITIVE_INFINITY;return function(e,f,r){return!t(e)||!t(f)||!t(r)||e===o||f===o||f>e||r>e?NaN:n(r*(f/e)*((e-f)/e)*((e-r)/(e-1)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stdev=t();
//# sourceMappingURL=browser.js.map
