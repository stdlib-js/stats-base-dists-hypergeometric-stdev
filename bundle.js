// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stdev=t()}(this,(function(){"use strict";var e=Math.floor;var t=function(t){return e(t)===t&&t>=0},n=Math.sqrt,o=Number.POSITIVE_INFINITY,f=t,i=n,r=o;return function(e,t,n){return!f(e)||!f(t)||!f(n)||e===r||t===r||t>e||n>e?NaN:i(n*(t/e)*((e-t)/e)*((e-n)/(e-1)))}}));
//# sourceMappingURL=bundle.js.map
