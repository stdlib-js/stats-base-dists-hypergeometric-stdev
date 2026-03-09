"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=v(function(f,u){
var i=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),s=require('@stdlib/constants-float64-pinf/dist');function n(r,e,t){return!i(r)||!i(e)||!i(t)||r===s||e===s||e>r||t>r?NaN:q(t*(e/r)*((r-e)/r)*((r-t)/(r-1)))}u.exports=n
});var o=a();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
