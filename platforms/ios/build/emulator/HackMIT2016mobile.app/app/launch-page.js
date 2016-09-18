//var firebase = require("firebase");
var createViewModel = require("./launch-page-view-model").createViewModel;
//var provider = new firebase.auth.GoogleAuthProvider();

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
