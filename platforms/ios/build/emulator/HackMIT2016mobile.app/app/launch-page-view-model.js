var Observable = require("data/observable").Observable;
var firebase = require("nativescript-plugin-firebase");
var frames = require("ui/frame");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.onTap = function() {
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(
            function(result) {
                // the result object has these properties ('undefined', depending on the login type):
                // uid, provider, expiresAtUnixEpochSeconds, profileImageURL, token
                exports.uid = result.uid;
                frames.topmost().navigate("main-page");
            },
            function(errorMessage) {
                console.log(errorMessage);
                alert("Your login has FAILED.  Please exit the classroom immediately.  You suck at life.");
            }
        )
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
exports.uid = "SUPERANONYMOUS";