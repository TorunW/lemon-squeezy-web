"use strict";
exports.__esModule = true;
exports.auth = exports.db = exports.app = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: 'AIzaSyDLHI-qWsgV7U4JKOyzgNEpEcYfqDT3FHw',
    authDomain: 'cocktailapp-40264.firebaseapp.com',
    projectId: 'cocktailapp-40264',
    storageBucket: 'cocktailapp-40264.appspot.com',
    messagingSenderId: '886927843585',
    appId: '1:886927843585:web:b18fd505969398204abb00'
};
exports.app = app_1.initializeApp(firebaseConfig);
exports.db = firestore_1.getFirestore(exports.app);
exports.auth = auth_1.getAuth(exports.app);
