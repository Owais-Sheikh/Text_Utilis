"use strict";
exports.__esModule = true;
var google_1 = require("next/font/google");
var react_1 = require("react");
var inter = google_1.Inter({ subsets: ['latin'] });
function Home() {
    var CoW = 0;
    var _a = react_1.useState(''), text = _a[0], settext = _a[1];
    var _b = react_1.useState(false), showWords = _b[0], setshowWords = _b[1];
    var _c = react_1.useState(false), showAlpha = _c[0], setshowAlpha = _c[1];
    var _d = react_1.useState(0), countWords = _d[0], setcountWords = _d[1];
    var _e = react_1.useState(0), countAlpha = _e[0], setcountAlpha = _e[1];
    var setVal = function (e) {
        e.preventDefault();
        setshowWords(false);
        settext(e.target.value);
    };
    var wordCount = function () {
        var countW = 0;
        setshowWords(true);
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var i = text_1[_i];
            if (i == " ") {
                countW++;
            }
        }
        setcountWords(countW + 1);
    };
    return (React.createElement("main", { className: "flex min-h-screen flex-col items-center md:p-24 px-10 py-20" },
        React.createElement("div", { className: 'flex items-center flex-col text-center md:m-5' },
            React.createElement("h1", { className: 'md:text-2xl text-xl md:text-indigo-800 text-indigo-500 font-bold mb-20' }, "Welcome to our website, where we provide top-notch services for text utilization!")),
        React.createElement("div", { className: "w-96" },
            React.createElement("div", { className: "relative w-full min-w-[200px]" },
                React.createElement("textarea", { value: text, "typeof": 'text', onChange: setVal, className: "peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-gray-600 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50", placeholder: " " }),
                React.createElement("label", { className: "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" }, "Paste the text here"))),
        React.createElement("div", { className: 'flex justify-around mt-10' },
            React.createElement("button", { onClick: wordCount, className: 'bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32' }, showWords ? countWords : "Count Words"),
            React.createElement("button", { onClick: function () { setcountAlpha(text.length - countWords); setshowAlpha(true); }, className: 'bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32' }, showAlpha ? countAlpha : "Count Alphabets"),
            React.createElement("button", { className: 'bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32' }, "Upper Case"),
            React.createElement("button", { className: 'bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32' }, "Lower Case"))));
}
exports["default"] = Home;
