var Observable = require("data/observable").Observable;
var user = require("./launch-page-view-model").user;
var firebase = require("nativescript-plugin-firebase");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.on(Observable.propertyChangeEvent, function(propertyChangeData) {
        //alert("HELLLO?????");
        if (propertyChangeData.propertyName === "confidence") {
            viewModel.finalConfidence = Math.round(propertyChangeData.value);
            // to store a JSON object
            firebase.setValue(
                '/' + user.uid, { "confidence": viewModel.finalConfidence }
            );
        }
    });

    return viewModel;
}

exports.createViewModel = createViewModel;