"use strict";
exports.__esModule = true;
var qr_code_svg_1 = require("./assets/qr-code.svg");
require("./App.css");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'page' },
            React.createElement("div", { className: 'card' },
                React.createElement("h1", null, "Lemon Squeezy"),
                React.createElement("p", null, "Delve into our app to uncover a world brimming with tantalizing cocktail recipes. Save and organize your favorites for later while also rating them based on your personal taste."),
                React.createElement("p", null,
                    React.createElement("span", null, "Cheers to discovering the art of cocktails, one recipe at a time!"))),
            React.createElement("div", { className: 'links' },
                React.createElement("img", { src: qr_code_svg_1["default"], className: 'logo', alt: 'Vite logo' }))),
        React.createElement("div", { className: 'footer' },
            React.createElement("p", { className: 'read-the-docs' }, "Privacy Policy * Delete account "))));
}
exports["default"] = App;
