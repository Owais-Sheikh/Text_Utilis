"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navbar = function () {
    return (react_1["default"].createElement("nav", { className: "bg-gray-800" },
        react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" },
            react_1["default"].createElement("div", { className: "relative flex h-16 items-center justify-between" },
                react_1["default"].createElement("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden" },
                    react_1["default"].createElement("button", { type: "button", className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", "aria-controls": "mobile-menu", "aria-expanded": "false" },
                        react_1["default"].createElement("span", { className: "sr-only" }, "Open main menu"),
                        react_1["default"].createElement("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true" },
                            react_1["default"].createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })),
                        react_1["default"].createElement("svg", { className: "hidden h-6 w-6", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true" },
                            react_1["default"].createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M6 18L18 6M6 6l12 12" })))),
                react_1["default"].createElement("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" },
                    react_1["default"].createElement("div", { className: "flex flex-shrink-0 items-center" },
                        react_1["default"].createElement("img", { className: "block h-8 w-auto lg:hidden", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500", alt: "Your Company" }),
                        react_1["default"].createElement("img", { className: "hidden h-8 w-auto lg:block", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500", alt: "Your Company" })),
                    "z",
                    react_1["default"].createElement("div", { className: "hidden sm:ml-6 sm:block" },
                        react_1["default"].createElement("div", { className: "flex space-x-4" },
                            react_1["default"].createElement("a", { href: "#", className: "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium", "aria-current": "page" }, "Dashboard"),
                            react_1["default"].createElement("a", { href: "#", className: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" }, "Team"),
                            react_1["default"].createElement("a", { href: "#", className: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" }, "Projects"),
                            react_1["default"].createElement("a", { href: "#", className: "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" }, "Calendar")))),
                react_1["default"].createElement("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" },
                    react_1["default"].createElement("button", { type: "button", className: "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" },
                        react_1["default"].createElement("span", { className: "sr-only" }, "View notifications"),
                        react_1["default"].createElement("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", "aria-hidden": "true" },
                            react_1["default"].createElement("path", { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" }))),
                    react_1["default"].createElement("div", { className: "relative ml-3" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("button", { type: "button", className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", id: "user-menu-button", "aria-expanded": "false", "aria-haspopup": "true" },
                                react_1["default"].createElement("span", { className: "sr-only" }, "Open user menu"),
                                react_1["default"].createElement("img", { className: "h-8 w-8 rounded-full", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }))),
                        react_1["default"].createElement("div", { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "user-menu-button", tabIndex: "-1" },
                            react_1["default"].createElement("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700", role: "menuitem", tabIndex: "-1", id: "user-menu-item-0" }, "Your Profile"),
                            react_1["default"].createElement("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700", role: "menuitem", tabIndex: "-1", id: "user-menu-item-1" }, "Settings"),
                            react_1["default"].createElement("a", { href: "#", className: "block px-4 py-2 text-sm text-gray-700", role: "menuitem", tabIndex: "-1", id: "user-menu-item-2" }, "Sign out")))))),
        react_1["default"].createElement("div", { className: "sm:hidden", id: "mobile-menu" },
            react_1["default"].createElement("div", { className: "space-y-1 px-2 pb-3 pt-2" },
                react_1["default"].createElement("a", { href: "#", className: "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium", "aria-current": "page" }, "Dashboard"),
                react_1["default"].createElement("a", { href: "#", className: "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" }, "Team"),
                react_1["default"].createElement("a", { href: "#", className: "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" }, "Projects"),
                react_1["default"].createElement("a", { href: "#", className: "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" }, "Calendar")))));
};
exports["default"] = navbar;