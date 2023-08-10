"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useToggle = function (_a) {
    var _b = _a.initialState, initialState = _b === void 0 ? false : _b;
    var _c = (0, react_1.useState)(initialState), isActive = _c[0], setIsActive = _c[1];
    var toggle = function () { return setIsActive(function (prev) { return !prev; }); };
    return {
        isActive: isActive,
        toggle: toggle,
    };
};
exports.default = useToggle;
