// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";function n(n,i,r){return!s(n)||!s(i)||!s(r)||n===e||i===e||i>n||r>n?NaN:t(r*(i/n)*((n-i)/n)*((n-r)/(n-1)))}export{n as default};
//# sourceMappingURL=index.mjs.map