// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var t=function(t){return r(t)===t&&t>=0},a=Math.sqrt,n=Number.POSITIVE_INFINITY;function u(r,u,e){return!t(r)||!t(u)||!t(e)||r===n||u===n||u>r||e>r?NaN:a(e*(u/r)*((r-u)/r)*((r-e)/(r-1)))}export{u as default};
//# sourceMappingURL=mod.js.map
