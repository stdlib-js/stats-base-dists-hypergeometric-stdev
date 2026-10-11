// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt,t=Math.floor;function n(r){return t(r)===r&&r>=0}var u=Number.POSITIVE_INFINITY;function a(t,a,e){return r(function(r,t,a){return!n(r)||!n(t)||!n(a)||r===u||t===u||t>r||a>r?NaN:a*(t/r)*((r-t)/r)*((r-a)/(r-1))}(t,a,e))}export{a as default};
//# sourceMappingURL=mod.js.map
