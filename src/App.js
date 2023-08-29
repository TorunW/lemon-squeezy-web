"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var qr_code_svg_1 = require("./assets/qr-code.svg");
require("./App.css");
var react_1 = require("react");
var firebase_config_ts_1 = require("./firebase/firebase-config.ts");
var auth_1 = require("firebase/auth");
var firestore_1 = require("firebase/firestore");
function App() {
    var _this = this;
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(''), modalType = _b[0], setModalType = _b[1];
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(''), password = _d[0], setPassword = _d[1];
    var signInUser = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            auth_1.signInWithEmailAndPassword(firebase_config_ts_1.auth, email, password)
                .then(function (userCredentials) { return __awaiter(_this, void 0, void 0, function () {
                var user, docRef;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            user = userCredentials.user;
                            console.log(user);
                            return [4 /*yield*/, firestore_1.addDoc(firestore_1.collection(firebase_config_ts_1.db, 'mail'), {
                                    title: 'Delete from website',
                                    message: user.email
                                })];
                        case 1:
                            docRef = _a.sent();
                            console.log('Document written with ID: ', docRef.id);
                            setEmail('');
                            setPassword('');
                            return [2 /*return*/];
                    }
                });
            }); })["catch"](function (err) {
                if (err.code === 'auth/wrong-password') {
                    console.log(err.code);
                }
                if (err.code === 'auth/invalid-email' ||
                    err.code === 'auth/user-not-found') {
                    console.log(err.code);
                }
                if (err.code === 'auth/too-many-requests') {
                    console.log(err.code);
                }
                console.log(err);
            });
            return [2 /*return*/];
        });
    }); };
    var openModal = function (type) {
        setIsOpen(true);
        setModalType(type === 'privacy' ? 'privacy' : 'delete');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: isOpen === true ? 'pageHasOverlay' : 'pageWithoutOverlay' },
            isOpen === true && modalType === 'delete' ? (React.createElement("div", { className: 'modalOverlay' },
                React.createElement("h2", null, "Delete acount forever?"),
                React.createElement("p", null, "confirm your email and password. After account has been delete all data will be lost."),
                React.createElement("div", { className: 'form' },
                    React.createElement("input", { type: 'email', name: 'email', value: email, onChange: function (e) { return setEmail(e.target.value); }, placeholder: 'Email' }),
                    React.createElement("input", { type: 'password', name: 'password', value: password, onChange: function (e) { return setPassword(e.target.value); }, placeholder: 'Password' }),
                    React.createElement("button", { type: 'submit', className: 'submit', onClick: function () { return signInUser(); } }, "Delete")))) : (''),
            React.createElement("div", { className: 'page' },
                React.createElement("div", { className: isOpen === true ? 'card' + ' cardBlur' : 'card' },
                    React.createElement("h1", null, "Lemon Squeezy"),
                    React.createElement("p", null, "Delve into our app to uncover a world brimming with tantalizing cocktail recipes. Save and organize your favorites for later while also rating them based on your personal taste."),
                    React.createElement("p", null,
                        React.createElement("span", null, "Cheers to discovering the art of cocktails, one recipe at a time!"))),
                React.createElement("div", { className: isOpen === true ? 'links' + ' linkBlur' : 'links' },
                    React.createElement("img", { src: qr_code_svg_1["default"], className: 'logo', alt: 'Vite logo' }))),
            React.createElement("div", { className: isOpen === true ? 'footerBlur' + ' footer' : 'footer' },
                React.createElement("p", { className: 'read-the-docs' },
                    React.createElement("button", null,
                        React.createElement("a", { target: '_blank', href: 'https://www.freeprivacypolicy.com/live/6a4323e6-3bab-434b-b4f8-e61fee614440' }, "Privacy Policy"),
                        ' '),
                    React.createElement("button", { onClick: function () { return openModal('delete'); } }, "Delete account"))))));
}
exports["default"] = App;
