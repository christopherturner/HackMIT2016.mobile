var Observable = require("data/observable").Observable;
var user = require("./launch-page-view-model").user;
var firebase = require("nativescript-plugin-firebase");

function createViewModel() {
    var viewModel = new Observable();
        alert("HELLLO?!???");

    viewModel.on(Observable.propertyChangeEvent, function(propertyChangeData) {
        alert("HELLLO?????");
        if (propertyChangeData.propertyName === "confidence") {
            console.log(propertyChangeData.value);
            alert("HELLLO!!!!!");
            // to store a JSON object
            firebase.setValue(
                '/' + user.uid, { "confidence": confidence }
            );
        }
    });

    return viewModel;
}

exports.createViewModel = createViewModel;