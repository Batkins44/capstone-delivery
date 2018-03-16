"use strict";
let firebase = require("firebase/app"),
    fb = require("./fb-key"),
    fbData = fb();

    var config = {
        apiKey: fbData.apiKey,
        authDomain: fbData.authDomain,
        databaseURL: fbData.databaseURL
      };
     
      firebase.getFBsettings = () => {
        console.log("getFBsettings", config);
        return config;
};
    
firebase.initializeApp(config);
module.exports = firebase;