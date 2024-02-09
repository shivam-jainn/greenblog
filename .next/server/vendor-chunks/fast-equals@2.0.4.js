"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/fast-equals@2.0.4";
exports.ids = ["vendor-chunks/fast-equals@2.0.4"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/fast-equals@2.0.4/node_modules/fast-equals/dist/fast-equals.esm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/fast-equals@2.0.4/node_modules/fast-equals/dist/fast-equals.esm.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   circularDeepEqual: () => (/* binding */ circularDeepEqual),\n/* harmony export */   circularShallowEqual: () => (/* binding */ circularShallowEqual),\n/* harmony export */   createCustomEqual: () => (/* binding */ createComparator),\n/* harmony export */   deepEqual: () => (/* binding */ deepEqual),\n/* harmony export */   sameValueZeroEqual: () => (/* binding */ sameValueZeroEqual),\n/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual)\n/* harmony export */ });\nvar HAS_WEAKSET_SUPPORT = typeof WeakSet === \"function\";\nvar keys = Object.keys;\n/**\r\n * are the values passed strictly equal or both NaN\r\n *\r\n * @param a the value to compare against\r\n * @param b the value to test\r\n * @returns are the values equal by the SameValueZero principle\r\n */ function sameValueZeroEqual(a, b) {\n    return a === b || a !== a && b !== b;\n}\n/**\r\n * is the value a plain object\r\n *\r\n * @param value the value to test\r\n * @returns is the value a plain object\r\n */ function isPlainObject(value) {\n    return value.constructor === Object || value.constructor == null;\n}\n/**\r\n * is the value promise-like (meaning it is thenable)\r\n *\r\n * @param value the value to test\r\n * @returns is the value promise-like\r\n */ function isPromiseLike(value) {\n    return !!value && typeof value.then === \"function\";\n}\n/**\r\n * is the value passed a react element\r\n *\r\n * @param value the value to test\r\n * @returns is the value a react element\r\n */ function isReactElement(value) {\n    return !!(value && value.$$typeof);\n}\n/**\r\n * in cases where WeakSet is not supported, creates a new custom\r\n * object that mimics the necessary API aspects for cache purposes\r\n *\r\n * @returns the new cache object\r\n */ function getNewCacheFallback() {\n    var values = [];\n    return {\n        add: function(value) {\n            values.push(value);\n        },\n        has: function(value) {\n            return values.indexOf(value) !== -1;\n        }\n    };\n}\n/**\r\n * get a new cache object to prevent circular references\r\n *\r\n * @returns the new cache object\r\n */ var getNewCache = function(canUseWeakMap) {\n    if (canUseWeakMap) {\n        return function _getNewCache() {\n            return new WeakSet();\n        };\n    }\n    return getNewCacheFallback;\n}(HAS_WEAKSET_SUPPORT);\n/**\r\n * create a custom isEqual handler specific to circular objects\r\n *\r\n * @param [isEqual] the isEqual comparator to use instead of isDeepEqual\r\n * @returns the method to create the `isEqual` function\r\n */ function createCircularEqualCreator(isEqual) {\n    return function createCircularEqual(comparator) {\n        var _comparator = isEqual || comparator;\n        return function circularEqual(a, b, cache) {\n            if (cache === void 0) {\n                cache = getNewCache();\n            }\n            var isCacheableA = !!a && typeof a === \"object\";\n            var isCacheableB = !!b && typeof b === \"object\";\n            if (isCacheableA || isCacheableB) {\n                var hasA = isCacheableA && cache.has(a);\n                var hasB = isCacheableB && cache.has(b);\n                if (hasA || hasB) {\n                    return hasA && hasB;\n                }\n                if (isCacheableA) {\n                    cache.add(a);\n                }\n                if (isCacheableB) {\n                    cache.add(b);\n                }\n            }\n            return _comparator(a, b, cache);\n        };\n    };\n}\n/**\r\n * are the arrays equal in value\r\n *\r\n * @param a the array to test\r\n * @param b the array to test against\r\n * @param isEqual the comparator to determine equality\r\n * @param meta the meta object to pass through\r\n * @returns are the arrays equal\r\n */ function areArraysEqual(a, b, isEqual, meta) {\n    var index = a.length;\n    if (b.length !== index) {\n        return false;\n    }\n    while(index-- > 0){\n        if (!isEqual(a[index], b[index], meta)) {\n            return false;\n        }\n    }\n    return true;\n}\n/**\r\n * are the maps equal in value\r\n *\r\n * @param a the map to test\r\n * @param b the map to test against\r\n * @param isEqual the comparator to determine equality\r\n * @param meta the meta map to pass through\r\n * @returns are the maps equal\r\n */ function areMapsEqual(a, b, isEqual, meta) {\n    var isValueEqual = a.size === b.size;\n    if (isValueEqual && a.size) {\n        var matchedIndices_1 = {};\n        a.forEach(function(aValue, aKey) {\n            if (isValueEqual) {\n                var hasMatch_1 = false;\n                var matchIndex_1 = 0;\n                b.forEach(function(bValue, bKey) {\n                    if (!hasMatch_1 && !matchedIndices_1[matchIndex_1]) {\n                        hasMatch_1 = isEqual(aKey, bKey, meta) && isEqual(aValue, bValue, meta);\n                        if (hasMatch_1) {\n                            matchedIndices_1[matchIndex_1] = true;\n                        }\n                    }\n                    matchIndex_1++;\n                });\n                isValueEqual = hasMatch_1;\n            }\n        });\n    }\n    return isValueEqual;\n}\nvar OWNER = \"_owner\";\nvar hasOwnProperty = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);\n/**\r\n * are the objects equal in value\r\n *\r\n * @param a the object to test\r\n * @param b the object to test against\r\n * @param isEqual the comparator to determine equality\r\n * @param meta the meta object to pass through\r\n * @returns are the objects equal\r\n */ function areObjectsEqual(a, b, isEqual, meta) {\n    var keysA = keys(a);\n    var index = keysA.length;\n    if (keys(b).length !== index) {\n        return false;\n    }\n    if (index) {\n        var key = void 0;\n        while(index-- > 0){\n            key = keysA[index];\n            if (key === OWNER) {\n                var reactElementA = isReactElement(a);\n                var reactElementB = isReactElement(b);\n                if ((reactElementA || reactElementB) && reactElementA !== reactElementB) {\n                    return false;\n                }\n            }\n            if (!hasOwnProperty(b, key) || !isEqual(a[key], b[key], meta)) {\n                return false;\n            }\n        }\n    }\n    return true;\n}\n/**\r\n * are the regExps equal in value\r\n *\r\n * @param a the regExp to test\r\n * @param b the regExp to test agains\r\n * @returns are the regExps equal\r\n */ function areRegExpsEqual(a, b) {\n    return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.unicode === b.unicode && a.sticky === b.sticky && a.lastIndex === b.lastIndex;\n}\n/**\r\n * are the sets equal in value\r\n *\r\n * @param a the set to test\r\n * @param b the set to test against\r\n * @param isEqual the comparator to determine equality\r\n * @param meta the meta set to pass through\r\n * @returns are the sets equal\r\n */ function areSetsEqual(a, b, isEqual, meta) {\n    var isValueEqual = a.size === b.size;\n    if (isValueEqual && a.size) {\n        var matchedIndices_2 = {};\n        a.forEach(function(aValue) {\n            if (isValueEqual) {\n                var hasMatch_2 = false;\n                var matchIndex_2 = 0;\n                b.forEach(function(bValue) {\n                    if (!hasMatch_2 && !matchedIndices_2[matchIndex_2]) {\n                        hasMatch_2 = isEqual(aValue, bValue, meta);\n                        if (hasMatch_2) {\n                            matchedIndices_2[matchIndex_2] = true;\n                        }\n                    }\n                    matchIndex_2++;\n                });\n                isValueEqual = hasMatch_2;\n            }\n        });\n    }\n    return isValueEqual;\n}\nvar HAS_MAP_SUPPORT = typeof Map === \"function\";\nvar HAS_SET_SUPPORT = typeof Set === \"function\";\nfunction createComparator(createIsEqual) {\n    var isEqual = /* eslint-disable no-use-before-define */ typeof createIsEqual === \"function\" ? createIsEqual(comparator) : comparator;\n    /* eslint-enable */ /**\r\n     * compare the value of the two objects and return true if they are equivalent in values\r\n     *\r\n     * @param a the value to test against\r\n     * @param b the value to test\r\n     * @param [meta] an optional meta object that is passed through to all equality test calls\r\n     * @returns are a and b equivalent in value\r\n     */ function comparator(a, b, meta) {\n        if (a === b) {\n            return true;\n        }\n        if (a && b && typeof a === \"object\" && typeof b === \"object\") {\n            if (isPlainObject(a) && isPlainObject(b)) {\n                return areObjectsEqual(a, b, isEqual, meta);\n            }\n            var aShape = Array.isArray(a);\n            var bShape = Array.isArray(b);\n            if (aShape || bShape) {\n                return aShape === bShape && areArraysEqual(a, b, isEqual, meta);\n            }\n            aShape = a instanceof Date;\n            bShape = b instanceof Date;\n            if (aShape || bShape) {\n                return aShape === bShape && sameValueZeroEqual(a.getTime(), b.getTime());\n            }\n            aShape = a instanceof RegExp;\n            bShape = b instanceof RegExp;\n            if (aShape || bShape) {\n                return aShape === bShape && areRegExpsEqual(a, b);\n            }\n            if (isPromiseLike(a) || isPromiseLike(b)) {\n                return a === b;\n            }\n            if (HAS_MAP_SUPPORT) {\n                aShape = a instanceof Map;\n                bShape = b instanceof Map;\n                if (aShape || bShape) {\n                    return aShape === bShape && areMapsEqual(a, b, isEqual, meta);\n                }\n            }\n            if (HAS_SET_SUPPORT) {\n                aShape = a instanceof Set;\n                bShape = b instanceof Set;\n                if (aShape || bShape) {\n                    return aShape === bShape && areSetsEqual(a, b, isEqual, meta);\n                }\n            }\n            return areObjectsEqual(a, b, isEqual, meta);\n        }\n        return a !== a && b !== b;\n    }\n    return comparator;\n}\nvar deepEqual = createComparator();\nvar shallowEqual = createComparator(function() {\n    return sameValueZeroEqual;\n});\nvar circularDeepEqual = createComparator(createCircularEqualCreator());\nvar circularShallowEqual = createComparator(createCircularEqualCreator(sameValueZeroEqual));\n //# sourceMappingURL=fast-equals.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1lcXVhbHNAMi4wLjQvbm9kZV9tb2R1bGVzL2Zhc3QtZXF1YWxzL2Rpc3QvZmFzdC1lcXVhbHMuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQUlBLHNCQUFzQixPQUFPQyxZQUFZO0FBQzdDLElBQUlDLE9BQU9DLE9BQU9ELElBQUk7QUFDdEI7Ozs7OztDQU1DLEdBQ0QsU0FBU0UsbUJBQW1CQyxDQUFDLEVBQUVDLENBQUM7SUFDNUIsT0FBT0QsTUFBTUMsS0FBTUQsTUFBTUEsS0FBS0MsTUFBTUE7QUFDeEM7QUFDQTs7Ozs7Q0FLQyxHQUNELFNBQVNDLGNBQWNDLEtBQUs7SUFDeEIsT0FBT0EsTUFBTUMsV0FBVyxLQUFLTixVQUFVSyxNQUFNQyxXQUFXLElBQUk7QUFDaEU7QUFDQTs7Ozs7Q0FLQyxHQUNELFNBQVNDLGNBQWNGLEtBQUs7SUFDeEIsT0FBTyxDQUFDLENBQUNBLFNBQVMsT0FBT0EsTUFBTUcsSUFBSSxLQUFLO0FBQzVDO0FBQ0E7Ozs7O0NBS0MsR0FDRCxTQUFTQyxlQUFlSixLQUFLO0lBQ3pCLE9BQU8sQ0FBQyxDQUFFQSxDQUFBQSxTQUFTQSxNQUFNSyxRQUFRO0FBQ3JDO0FBQ0E7Ozs7O0NBS0MsR0FDRCxTQUFTQztJQUNMLElBQUlDLFNBQVMsRUFBRTtJQUNmLE9BQU87UUFDSEMsS0FBSyxTQUFVUixLQUFLO1lBQ2hCTyxPQUFPRSxJQUFJLENBQUNUO1FBQ2hCO1FBQ0FVLEtBQUssU0FBVVYsS0FBSztZQUNoQixPQUFPTyxPQUFPSSxPQUFPLENBQUNYLFdBQVcsQ0FBQztRQUN0QztJQUNKO0FBQ0o7QUFDQTs7OztDQUlDLEdBQ0QsSUFBSVksY0FBYyxTQUFXQyxhQUFhO0lBQ3RDLElBQUlBLGVBQWU7UUFDZixPQUFPLFNBQVNDO1lBQ1osT0FBTyxJQUFJckI7UUFDZjtJQUNKO0lBQ0EsT0FBT2E7QUFDWCxFQUFHZDtBQUNIOzs7OztDQUtDLEdBQ0QsU0FBU3VCLDJC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RyxRQUFRO2dCQUNsQixPQUFRSCxXQUFXRyxVQUFVN0UsbUJBQW1CQyxFQUFFOEUsT0FBTyxJQUFJN0UsRUFBRTZFLE9BQU87WUFDMUU7WUFDQUwsU0FBU3pFLGFBQWErRTtZQUN0QkgsU0FBUzNFLGFBQWE4RTtZQUN0QixJQUFJTixVQUFVRyxRQUFRO2dCQUNsQixPQUFPSCxXQUFXRyxVQUFVckIsZ0JBQWdCdkQsR0FBR0M7WUFDbkQ7WUFDQSxJQUFJSSxjQUFjTCxNQUFNSyxjQUFjSixJQUFJO2dCQUN0QyxPQUFPRCxNQUFNQztZQUNqQjtZQUNBLElBQUlrRSxpQkFBaUI7Z0JBQ2pCTSxTQUFTekUsYUFBYW9FO2dCQUN0QlEsU0FBUzNFLGFBQWFtRTtnQkFDdEIsSUFBSUssVUFBVUcsUUFBUTtvQkFDbEIsT0FBT0gsV0FBV0csVUFBVTNDLGFBQWFqQyxHQUFHQyxHQUFHa0IsU0FBU1c7Z0JBQzVEO1lBQ0o7WUFDQSxJQUFJdUMsaUJBQWlCO2dCQUNqQkksU0FBU3pFLGFBQWFzRTtnQkFDdEJNLFNBQVMzRSxhQUFhcUU7Z0JBQ3RCLElBQUlHLFVBQVVHLFFBQVE7b0JBQ2xCLE9BQU9ILFdBQVdHLFVBQVViLGFBQWEvRCxHQUFHQyxHQUFHa0IsU0FBU1c7Z0JBQzVEO1lBQ0o7WUFDQSxPQUFPb0IsZ0JBQWdCbEQsR0FBR0MsR0FBR2tCLFNBQVNXO1FBQzFDO1FBQ0EsT0FBTzlCLE1BQU1BLEtBQUtDLE1BQU1BO0lBQzVCO0lBQ0EsT0FBT29CO0FBQ1g7QUFFQSxJQUFJMkQsWUFBWVQ7QUFDaEIsSUFBSVUsZUFBZVYsaUJBQWlCO0lBQWMsT0FBT3hFO0FBQW9CO0FBQzdFLElBQUltRixvQkFBb0JYLGlCQUFpQnJEO0FBQ3pDLElBQUlpRSx1QkFBdUJaLGlCQUFpQnJELDJCQUEyQm5CO0FBRWdFLENBQ3ZJLDJDQUEyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhaWx3aW5kLW5leHRqcy1zdGFydGVyLWJsb2cvLi9ub2RlX21vZHVsZXMvLnBucG0vZmFzdC1lcXVhbHNAMi4wLjQvbm9kZV9tb2R1bGVzL2Zhc3QtZXF1YWxzL2Rpc3QvZmFzdC1lcXVhbHMuZXNtLmpzPzQzMWUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhBU19XRUFLU0VUX1NVUFBPUlQgPSB0eXBlb2YgV2Vha1NldCA9PT0gJ2Z1bmN0aW9uJztcclxudmFyIGtleXMgPSBPYmplY3Qua2V5cztcclxuLyoqXHJcbiAqIGFyZSB0aGUgdmFsdWVzIHBhc3NlZCBzdHJpY3RseSBlcXVhbCBvciBib3RoIE5hTlxyXG4gKlxyXG4gKiBAcGFyYW0gYSB0aGUgdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0XHJcbiAqIEBwYXJhbSBiIHRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIGFyZSB0aGUgdmFsdWVzIGVxdWFsIGJ5IHRoZSBTYW1lVmFsdWVaZXJvIHByaW5jaXBsZVxyXG4gKi9cclxuZnVuY3Rpb24gc2FtZVZhbHVlWmVyb0VxdWFsKGEsIGIpIHtcclxuICAgIHJldHVybiBhID09PSBiIHx8IChhICE9PSBhICYmIGIgIT09IGIpO1xyXG59XHJcbi8qKlxyXG4gKiBpcyB0aGUgdmFsdWUgYSBwbGFpbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIGlzIHRoZSB2YWx1ZSBhIHBsYWluIG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yID09PSBPYmplY3QgfHwgdmFsdWUuY29uc3RydWN0b3IgPT0gbnVsbDtcclxufVxyXG4vKipcclxuICogaXMgdGhlIHZhbHVlIHByb21pc2UtbGlrZSAobWVhbmluZyBpdCBpcyB0aGVuYWJsZSlcclxuICpcclxuICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIGlzIHRoZSB2YWx1ZSBwcm9taXNlLWxpa2VcclxuICovXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZUxpa2UodmFsdWUpIHtcclxuICAgIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbi8qKlxyXG4gKiBpcyB0aGUgdmFsdWUgcGFzc2VkIGEgcmVhY3QgZWxlbWVudFxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIHRlc3RcclxuICogQHJldHVybnMgaXMgdGhlIHZhbHVlIGEgcmVhY3QgZWxlbWVudFxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcclxuICAgIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS4kJHR5cGVvZik7XHJcbn1cclxuLyoqXHJcbiAqIGluIGNhc2VzIHdoZXJlIFdlYWtTZXQgaXMgbm90IHN1cHBvcnRlZCwgY3JlYXRlcyBhIG5ldyBjdXN0b21cclxuICogb2JqZWN0IHRoYXQgbWltaWNzIHRoZSBuZWNlc3NhcnkgQVBJIGFzcGVjdHMgZm9yIGNhY2hlIHB1cnBvc2VzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRoZSBuZXcgY2FjaGUgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXROZXdDYWNoZUZhbGxiYWNrKCkge1xyXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXM6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLmluZGV4T2YodmFsdWUpICE9PSAtMTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogZ2V0IGEgbmV3IGNhY2hlIG9iamVjdCB0byBwcmV2ZW50IGNpcmN1bGFyIHJlZmVyZW5jZXNcclxuICpcclxuICogQHJldHVybnMgdGhlIG5ldyBjYWNoZSBvYmplY3RcclxuICovXHJcbnZhciBnZXROZXdDYWNoZSA9IChmdW5jdGlvbiAoY2FuVXNlV2Vha01hcCkge1xyXG4gICAgaWYgKGNhblVzZVdlYWtNYXApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gX2dldE5ld0NhY2hlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldE5ld0NhY2hlRmFsbGJhY2s7XHJcbn0pKEhBU19XRUFLU0VUX1NVUFBPUlQpO1xyXG4vKipcclxuICogY3JlYXRlIGEgY3VzdG9tIGlzRXF1YWwgaGFuZGxlciBzcGVjaWZpYyB0byBjaXJjdWxhciBvYmplY3RzXHJcbiAqXHJcbiAqIEBwYXJhbSBbaXNFcXVhbF0gdGhlIGlzRXF1YWwgY29tcGFyYXRvciB0byB1c2UgaW5zdGVhZCBvZiBpc0RlZXBFcXVhbFxyXG4gKiBAcmV0dXJucyB0aGUgbWV0aG9kIHRvIGNyZWF0ZSB0aGUgYGlzRXF1YWxgIGZ1bmN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDaXJjdWxhckVxdWFsQ3JlYXRvcihpc0VxdWFsKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlQ2lyY3VsYXJFcXVhbChjb21wYXJhdG9yKSB7XHJcbiAgICAgICAgdmFyIF9jb21wYXJhdG9yID0gaXNFcXVhbCB8fCBjb21wYXJhdG9yO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjaXJjdWxhckVxdWFsKGEsIGIsIGNhY2hlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWNoZSA9PT0gdm9pZCAwKSB7IGNhY2hlID0gZ2V0TmV3Q2FjaGUoKTsgfVxyXG4gICAgICAgICAgICB2YXIgaXNDYWNoZWFibGVBID0gISFhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JztcclxuICAgICAgICAgICAgdmFyIGlzQ2FjaGVhYmxlQiA9ICEhYiAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCc7XHJcbiAgICAgICAgICAgIGlmIChpc0NhY2hlYWJsZUEgfHwgaXNDYWNoZWFibGVCKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzQSA9IGlzQ2FjaGVhYmxlQSAmJiBjYWNoZS5oYXMoYSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzQiA9IGlzQ2FjaGVhYmxlQiAmJiBjYWNoZS5oYXMoYik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQSB8fCBoYXNCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc0EgJiYgaGFzQjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0NhY2hlYWJsZUEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5hZGQoYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDYWNoZWFibGVCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUuYWRkKGIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfY29tcGFyYXRvcihhLCBiLCBjYWNoZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuLyoqXHJcbiAqIGFyZSB0aGUgYXJyYXlzIGVxdWFsIGluIHZhbHVlXHJcbiAqXHJcbiAqIEBwYXJhbSBhIHRoZSBhcnJheSB0byB0ZXN0XHJcbiAqIEBwYXJhbSBiIHRoZSBhcnJheSB0byB0ZXN0IGFnYWluc3RcclxuICogQHBhcmFtIGlzRXF1YWwgdGhlIGNvbXBhcmF0b3IgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XHJcbiAqIEBwYXJhbSBtZXRhIHRoZSBtZXRhIG9iamVjdCB0byBwYXNzIHRocm91Z2hcclxuICogQHJldHVybnMgYXJlIHRoZSBhcnJheXMgZXF1YWxcclxuICovXHJcbmZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKGEsIGIsIGlzRXF1YWwsIG1ldGEpIHtcclxuICAgIHZhciBpbmRleCA9IGEubGVuZ3RoO1xyXG4gICAgaWYgKGIubGVuZ3RoICE9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbmRleC0tID4gMCkge1xyXG4gICAgICAgIGlmICghaXNFcXVhbChhW2luZGV4XSwgYltpbmRleF0sIG1ldGEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4vKipcclxuICogYXJlIHRoZSBtYXBzIGVxdWFsIGluIHZhbHVlXHJcbiAqXHJcbiAqIEBwYXJhbSBhIHRoZSBtYXAgdG8gdGVzdFxyXG4gKiBAcGFyYW0gYiB0aGUgbWFwIHRvIHRlc3QgYWdhaW5zdFxyXG4gKiBAcGFyYW0gaXNFcXVhbCB0aGUgY29tcGFyYXRvciB0byBkZXRlcm1pbmUgZXF1YWxpdHlcclxuICogQHBhcmFtIG1ldGEgdGhlIG1ldGEgbWFwIHRvIHBhc3MgdGhyb3VnaFxyXG4gKiBAcmV0dXJucyBhcmUgdGhlIG1hcHMgZXF1YWxcclxuICovXHJcbmZ1bmN0aW9uIGFyZU1hcHNFcXVhbChhLCBiLCBpc0VxdWFsLCBtZXRhKSB7XHJcbiAgICB2YXIgaXNWYWx1ZUVxdWFsID0gYS5zaXplID09PSBiLnNpemU7XHJcbiAgICBpZiAoaXNWYWx1ZUVxdWFsICYmIGEuc2l6ZSkge1xyXG4gICAgICAgIHZhciBtYXRjaGVkSW5kaWNlc18xID0ge307XHJcbiAgICAgICAgYS5mb3JFYWNoKGZ1bmN0aW9uIChhVmFsdWUsIGFLZXkpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmFsdWVFcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc01hdGNoXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaEluZGV4XzEgPSAwO1xyXG4gICAgICAgICAgICAgICAgYi5mb3JFYWNoKGZ1bmN0aW9uIChiVmFsdWUsIGJLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc01hdGNoXzEgJiYgIW1hdGNoZWRJbmRpY2VzXzFbbWF0Y2hJbmRleF8xXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaF8xID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXF1YWwoYUtleSwgYktleSwgbWV0YSkgJiYgaXNFcXVhbChhVmFsdWUsIGJWYWx1ZSwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaF8xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkSW5kaWNlc18xW21hdGNoSW5kZXhfMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoSW5kZXhfMSsrO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbHVlRXF1YWwgPSBoYXNNYXRjaF8xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWx1ZUVxdWFsO1xyXG59XHJcbnZhciBPV05FUiA9ICdfb3duZXInO1xyXG52YXIgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcclxuLyoqXHJcbiAqIGFyZSB0aGUgb2JqZWN0cyBlcXVhbCBpbiB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0gYSB0aGUgb2JqZWN0IHRvIHRlc3RcclxuICogQHBhcmFtIGIgdGhlIG9iamVjdCB0byB0ZXN0IGFnYWluc3RcclxuICogQHBhcmFtIGlzRXF1YWwgdGhlIGNvbXBhcmF0b3IgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5XHJcbiAqIEBwYXJhbSBtZXRhIHRoZSBtZXRhIG9iamVjdCB0byBwYXNzIHRocm91Z2hcclxuICogQHJldHVybnMgYXJlIHRoZSBvYmplY3RzIGVxdWFsXHJcbiAqL1xyXG5mdW5jdGlvbiBhcmVPYmplY3RzRXF1YWwoYSwgYiwgaXNFcXVhbCwgbWV0YSkge1xyXG4gICAgdmFyIGtleXNBID0ga2V5cyhhKTtcclxuICAgIHZhciBpbmRleCA9IGtleXNBLmxlbmd0aDtcclxuICAgIGlmIChrZXlzKGIpLmxlbmd0aCAhPT0gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xyXG4gICAgICAgIHdoaWxlIChpbmRleC0tID4gMCkge1xyXG4gICAgICAgICAgICBrZXkgPSBrZXlzQVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IE9XTkVSKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVhY3RFbGVtZW50QSA9IGlzUmVhY3RFbGVtZW50KGEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlYWN0RWxlbWVudEIgPSBpc1JlYWN0RWxlbWVudChiKTtcclxuICAgICAgICAgICAgICAgIGlmICgocmVhY3RFbGVtZW50QSB8fCByZWFjdEVsZW1lbnRCKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0RWxlbWVudEEgIT09IHJlYWN0RWxlbWVudEIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShiLCBrZXkpIHx8ICFpc0VxdWFsKGFba2V5XSwgYltrZXldLCBtZXRhKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuLyoqXHJcbiAqIGFyZSB0aGUgcmVnRXhwcyBlcXVhbCBpbiB2YWx1ZVxyXG4gKlxyXG4gKiBAcGFyYW0gYSB0aGUgcmVnRXhwIHRvIHRlc3RcclxuICogQHBhcmFtIGIgdGhlIHJlZ0V4cCB0byB0ZXN0IGFnYWluc1xyXG4gKiBAcmV0dXJucyBhcmUgdGhlIHJlZ0V4cHMgZXF1YWxcclxuICovXHJcbmZ1bmN0aW9uIGFyZVJlZ0V4cHNFcXVhbChhLCBiKSB7XHJcbiAgICByZXR1cm4gKGEuc291cmNlID09PSBiLnNvdXJjZSAmJlxyXG4gICAgICAgIGEuZ2xvYmFsID09PSBiLmdsb2JhbCAmJlxyXG4gICAgICAgIGEuaWdub3JlQ2FzZSA9PT0gYi5pZ25vcmVDYXNlICYmXHJcbiAgICAgICAgYS5tdWx0aWxpbmUgPT09IGIubXVsdGlsaW5lICYmXHJcbiAgICAgICAgYS51bmljb2RlID09PSBiLnVuaWNvZGUgJiZcclxuICAgICAgICBhLnN0aWNreSA9PT0gYi5zdGlja3kgJiZcclxuICAgICAgICBhLmxhc3RJbmRleCA9PT0gYi5sYXN0SW5kZXgpO1xyXG59XHJcbi8qKlxyXG4gKiBhcmUgdGhlIHNldHMgZXF1YWwgaW4gdmFsdWVcclxuICpcclxuICogQHBhcmFtIGEgdGhlIHNldCB0byB0ZXN0XHJcbiAqIEBwYXJhbSBiIHRoZSBzZXQgdG8gdGVzdCBhZ2FpbnN0XHJcbiAqIEBwYXJhbSBpc0VxdWFsIHRoZSBjb21wYXJhdG9yIHRvIGRldGVybWluZSBlcXVhbGl0eVxyXG4gKiBAcGFyYW0gbWV0YSB0aGUgbWV0YSBzZXQgdG8gcGFzcyB0aHJvdWdoXHJcbiAqIEByZXR1cm5zIGFyZSB0aGUgc2V0cyBlcXVhbFxyXG4gKi9cclxuZnVuY3Rpb24gYXJlU2V0c0VxdWFsKGEsIGIsIGlzRXF1YWwsIG1ldGEpIHtcclxuICAgIHZhciBpc1ZhbHVlRXF1YWwgPSBhLnNpemUgPT09IGIuc2l6ZTtcclxuICAgIGlmIChpc1ZhbHVlRXF1YWwgJiYgYS5zaXplKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZWRJbmRpY2VzXzIgPSB7fTtcclxuICAgICAgICBhLmZvckVhY2goZnVuY3Rpb24gKGFWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoaXNWYWx1ZUVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzTWF0Y2hfMiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoSW5kZXhfMiA9IDA7XHJcbiAgICAgICAgICAgICAgICBiLmZvckVhY2goZnVuY3Rpb24gKGJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2hfMiAmJiAhbWF0Y2hlZEluZGljZXNfMlttYXRjaEluZGV4XzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoXzIgPSBpc0VxdWFsKGFWYWx1ZSwgYlZhbHVlLCBtZXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hdGNoXzIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRJbmRpY2VzXzJbbWF0Y2hJbmRleF8yXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleF8yKys7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlzVmFsdWVFcXVhbCA9IGhhc01hdGNoXzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbHVlRXF1YWw7XHJcbn1cblxudmFyIEhBU19NQVBfU1VQUE9SVCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbic7XHJcbnZhciBIQVNfU0VUX1NVUFBPUlQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nO1xyXG5mdW5jdGlvbiBjcmVhdGVDb21wYXJhdG9yKGNyZWF0ZUlzRXF1YWwpIHtcclxuICAgIHZhciBpc0VxdWFsID0gXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4gICAgdHlwZW9mIGNyZWF0ZUlzRXF1YWwgPT09ICdmdW5jdGlvbidcclxuICAgICAgICA/IGNyZWF0ZUlzRXF1YWwoY29tcGFyYXRvcilcclxuICAgICAgICA6IGNvbXBhcmF0b3I7XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXHJcbiAgICAvKipcclxuICAgICAqIGNvbXBhcmUgdGhlIHZhbHVlIG9mIHRoZSB0d28gb2JqZWN0cyBhbmQgcmV0dXJuIHRydWUgaWYgdGhleSBhcmUgZXF1aXZhbGVudCBpbiB2YWx1ZXNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYSB0aGUgdmFsdWUgdG8gdGVzdCBhZ2FpbnN0XHJcbiAgICAgKiBAcGFyYW0gYiB0aGUgdmFsdWUgdG8gdGVzdFxyXG4gICAgICogQHBhcmFtIFttZXRhXSBhbiBvcHRpb25hbCBtZXRhIG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRvIGFsbCBlcXVhbGl0eSB0ZXN0IGNhbGxzXHJcbiAgICAgKiBAcmV0dXJucyBhcmUgYSBhbmQgYiBlcXVpdmFsZW50IGluIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmF0b3IoYSwgYiwgbWV0YSkge1xyXG4gICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoYSkgJiYgaXNQbGFpbk9iamVjdChiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZU9iamVjdHNFcXVhbChhLCBiLCBpc0VxdWFsLCBtZXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYVNoYXBlID0gQXJyYXkuaXNBcnJheShhKTtcclxuICAgICAgICAgICAgdmFyIGJTaGFwZSA9IEFycmF5LmlzQXJyYXkoYik7XHJcbiAgICAgICAgICAgIGlmIChhU2hhcGUgfHwgYlNoYXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYVNoYXBlID09PSBiU2hhcGUgJiYgYXJlQXJyYXlzRXF1YWwoYSwgYiwgaXNFcXVhbCwgbWV0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYVNoYXBlID0gYSBpbnN0YW5jZW9mIERhdGU7XHJcbiAgICAgICAgICAgIGJTaGFwZSA9IGIgaW5zdGFuY2VvZiBEYXRlO1xyXG4gICAgICAgICAgICBpZiAoYVNoYXBlIHx8IGJTaGFwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChhU2hhcGUgPT09IGJTaGFwZSAmJiBzYW1lVmFsdWVaZXJvRXF1YWwoYS5nZXRUaW1lKCksIGIuZ2V0VGltZSgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYVNoYXBlID0gYSBpbnN0YW5jZW9mIFJlZ0V4cDtcclxuICAgICAgICAgICAgYlNoYXBlID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcclxuICAgICAgICAgICAgaWYgKGFTaGFwZSB8fCBiU2hhcGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhU2hhcGUgPT09IGJTaGFwZSAmJiBhcmVSZWdFeHBzRXF1YWwoYSwgYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzUHJvbWlzZUxpa2UoYSkgfHwgaXNQcm9taXNlTGlrZShiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPT09IGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEhBU19NQVBfU1VQUE9SVCkge1xyXG4gICAgICAgICAgICAgICAgYVNoYXBlID0gYSBpbnN0YW5jZW9mIE1hcDtcclxuICAgICAgICAgICAgICAgIGJTaGFwZSA9IGIgaW5zdGFuY2VvZiBNYXA7XHJcbiAgICAgICAgICAgICAgICBpZiAoYVNoYXBlIHx8IGJTaGFwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhU2hhcGUgPT09IGJTaGFwZSAmJiBhcmVNYXBzRXF1YWwoYSwgYiwgaXNFcXVhbCwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEhBU19TRVRfU1VQUE9SVCkge1xyXG4gICAgICAgICAgICAgICAgYVNoYXBlID0gYSBpbnN0YW5jZW9mIFNldDtcclxuICAgICAgICAgICAgICAgIGJTaGFwZSA9IGIgaW5zdGFuY2VvZiBTZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYVNoYXBlIHx8IGJTaGFwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhU2hhcGUgPT09IGJTaGFwZSAmJiBhcmVTZXRzRXF1YWwoYSwgYiwgaXNFcXVhbCwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFyZU9iamVjdHNFcXVhbChhLCBiLCBpc0VxdWFsLCBtZXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYXJhdG9yO1xyXG59XG5cbnZhciBkZWVwRXF1YWwgPSBjcmVhdGVDb21wYXJhdG9yKCk7XHJcbnZhciBzaGFsbG93RXF1YWwgPSBjcmVhdGVDb21wYXJhdG9yKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNhbWVWYWx1ZVplcm9FcXVhbDsgfSk7XHJcbnZhciBjaXJjdWxhckRlZXBFcXVhbCA9IGNyZWF0ZUNvbXBhcmF0b3IoY3JlYXRlQ2lyY3VsYXJFcXVhbENyZWF0b3IoKSk7XHJcbnZhciBjaXJjdWxhclNoYWxsb3dFcXVhbCA9IGNyZWF0ZUNvbXBhcmF0b3IoY3JlYXRlQ2lyY3VsYXJFcXVhbENyZWF0b3Ioc2FtZVZhbHVlWmVyb0VxdWFsKSk7XG5cbmV4cG9ydCB7IGNpcmN1bGFyRGVlcEVxdWFsLCBjaXJjdWxhclNoYWxsb3dFcXVhbCwgY3JlYXRlQ29tcGFyYXRvciBhcyBjcmVhdGVDdXN0b21FcXVhbCwgZGVlcEVxdWFsLCBzYW1lVmFsdWVaZXJvRXF1YWwsIHNoYWxsb3dFcXVhbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFzdC1lcXVhbHMuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbIkhBU19XRUFLU0VUX1NVUFBPUlQiLCJXZWFrU2V0Iiwia2V5cyIsIk9iamVjdCIsInNhbWVWYWx1ZVplcm9FcXVhbCIsImEiLCJiIiwiaXNQbGFpbk9iamVjdCIsInZhbHVlIiwiY29uc3RydWN0b3IiLCJpc1Byb21pc2VMaWtlIiwidGhlbiIsImlzUmVhY3RFbGVtZW50IiwiJCR0eXBlb2YiLCJnZXROZXdDYWNoZUZhbGxiYWNrIiwidmFsdWVzIiwiYWRkIiwicHVzaCIsImhhcyIsImluZGV4T2YiLCJnZXROZXdDYWNoZSIsImNhblVzZVdlYWtNYXAiLCJfZ2V0TmV3Q2FjaGUiLCJjcmVhdGVDaXJjdWxhckVxdWFsQ3JlYXRvciIsImlzRXF1YWwiLCJjcmVhdGVDaXJjdWxhckVxdWFsIiwiY29tcGFyYXRvciIsIl9jb21wYXJhdG9yIiwiY2lyY3VsYXJFcXVhbCIsImNhY2hlIiwiaXNDYWNoZWFibGVBIiwiaXNDYWNoZWFibGVCIiwiaGFzQSIsImhhc0IiLCJhcmVBcnJheXNFcXVhbCIsIm1ldGEiLCJpbmRleCIsImxlbmd0aCIsImFyZU1hcHNFcXVhbCIsImlzVmFsdWVFcXVhbCIsInNpemUiLCJtYXRjaGVkSW5kaWNlc18xIiwiZm9yRWFjaCIsImFWYWx1ZSIsImFLZXkiLCJoYXNNYXRjaF8xIiwibWF0Y2hJbmRleF8xIiwiYlZhbHVlIiwiYktleSIsIk9XTkVSIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsImJpbmQiLCJjYWxsIiwiYXJlT2JqZWN0c0VxdWFsIiwia2V5c0EiLCJrZXkiLCJyZWFjdEVsZW1lbnRBIiwicmVhY3RFbGVtZW50QiIsImFyZVJlZ0V4cHNFcXVhbCIsInNvdXJjZSIsImdsb2JhbCIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJ1bmljb2RlIiwic3RpY2t5IiwibGFzdEluZGV4IiwiYXJlU2V0c0VxdWFsIiwibWF0Y2hlZEluZGljZXNfMiIsImhhc01hdGNoXzIiLCJtYXRjaEluZGV4XzIiLCJIQVNfTUFQX1NVUFBPUlQiLCJNYXAiLCJIQVNfU0VUX1NVUFBPUlQiLCJTZXQiLCJjcmVhdGVDb21wYXJhdG9yIiwiY3JlYXRlSXNFcXVhbCIsImFTaGFwZSIsIkFycmF5IiwiaXNBcnJheSIsImJTaGFwZSIsIkRhdGUiLCJnZXRUaW1lIiwiUmVnRXhwIiwiZGVlcEVxdWFsIiwic2hhbGxvd0VxdWFsIiwiY2lyY3VsYXJEZWVwRXF1YWwiLCJjaXJjdWxhclNoYWxsb3dFcXVhbCIsImNyZWF0ZUN1c3RvbUVxdWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/fast-equals@2.0.4/node_modules/fast-equals/dist/fast-equals.esm.js\n");

/***/ })

};
;