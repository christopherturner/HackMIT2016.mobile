var createViewModel = require("./main-view-model").createViewModel;
var observableModule = require("data/observable");
var user = require("./launch-page-view-model").user;
var firebase = require("nativescript-plugin-firebase");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}

function onNavigatingFrom(args) {
    firebase.setValue(
        '/' + user.uid, { "active": false }
    );
}
exports.onNavigatingTo = onNavigatingTo;
exports.onNavigatingFrom = onNavigatingFrom;