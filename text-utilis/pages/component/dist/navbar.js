"use strict";
exports.__esModule = true;
/* eslint-disable react-hooks/rules-of-hooks */
var link_1 = require("next/link");
var react_1 = require("react");
var react_2 = require("react");
var navbar = function () {
    var _a = react_2.useState(false), menu = _a[0], setmenu = _a[1];
    return (react_1["default"].createElement("nav", { className: "bg-gray-800" },
        react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" },
            react_1["default"].createElement("div", { className: "relative flex h-16 items-center justify-between" },
                react_1["default"].createElement("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden" },
                    react_1["default"].createElement("button", { type: "button", className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", "aria-controls": "mobile-menu", "aria-expanded": "false" },
                        react_1["default"].createElement("span", { className: "sr-only" }, "Open main menu"),
                        react_1["default"].createElement("svg", { onClick: function () { setmenu(true); }, className: (menu ? "hidden" : "block") + " h-6 w-6", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })),
                        react_1["default"].createElement("svg", { onClick: function () { setmenu(false); }, className: (!menu ? "hidden" : "block") + " h-6 w-6", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" },
                            react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })))),
                react_1["default"].createElement("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" },
                    react_1["default"].createElement("div", { className: "flex flex-shrink-0 font-semibold items-center text-xl text-blue-500" }, "Text Utilis"),
                    react_1["default"].createElement("div", { className: "hidden sm:ml-6 sm:block" },
                        react_1["default"].createElement("div", { className: "flex space-x-4" },
                            react_1["default"].createElement(link_1["default"], { href: '/', className: "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium", "aria-current": "page" }, "Home")))),
                react_1["default"].createElement("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" }))),
        menu && react_1["default"].createElement("div", { className: "sm:hidden", id: "mobile-menu" },
            react_1["default"].createElement("div", { className: "space-y-1 px-2 pb-3 pt-2" },
                react_1["default"].createElement(link_1["default"], { href: '/', className: "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium", "aria-current": "page" }, "Home")))));
};
exports["default"] = navbar;
