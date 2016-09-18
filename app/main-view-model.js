var Observable = require("data/observable").Observable;
var user = require("./launch-page-view-model").user;
var firebase = require("nativescript-plugin-firebase");

function createViewModel() {
    var viewModel = new Observable();
    viewModel.confidence = 50;
    viewModel.roundNum = {
        toView: function(value) {
            return Math.round(value);
        },
        toModel: function(value) {
            return Math.round(value);

        }
    }
    viewModel.on(Observable.propertyChangeEvent, function(propertyChangeData) {
        if (propertyChangeData.propertyName === "confidence") {
            // to store a JSON object
            //console.log(Math.round(propertyChangeData.value));
            firebase.setValue(
                '/' + user.uid, { "confidence": Math.round(propertyChangeData.value), "active": true }
            );
        }
    });

    return viewModel;
}

exports.createViewModel = createViewModel;