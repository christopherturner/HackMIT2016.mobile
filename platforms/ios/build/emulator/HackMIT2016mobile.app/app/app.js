var application = require("application");
var firebase = require("nativescript-plugin-firebase");

firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
}).then(
    function(instance) {
        console.log("firebase.init done");
    },
    function(error) {
        console.log("firebase.init error: " + error);
    }
);
application.start({ moduleName: "launch-page" });
/*var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAWS7heLm3PAR02xzvfmt8p1pGGAjZkT5Q",
    authDomain: "hackmit2016.firebaseapp.com",
    databaseURL: "https://hackmit2016.firebaseio.com",
    storageBucket: "hackmit2016.appspot.com",
    messagingSenderId: "1016554614413"
};
firebase.initializeApp(config);
*/
