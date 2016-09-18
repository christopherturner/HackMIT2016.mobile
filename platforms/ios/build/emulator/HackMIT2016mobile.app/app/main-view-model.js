var Observable = require("data/observable").Observable;
var user = require("./launch-page-view-model").user;
var firebase = require("nativescript-plugin-firebase");
var canSend = true;
var hasUpdate = false;

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
            if (canSend == true) {
                canSend = false;
                hasUpdate = false;
                // to store a JSON object
                //console.log(Math.round(propertyChangeData.value));
                firebase.setValue(
                    '/' + user.uid, { "confidence": Math.round(propertyChangeData.value), "active": true }
                );
                setTimeout(function() {
                    canSend = true;
                    if (hasUpdate) {
                        firebase.setValue(
                            '/' + user.uid, { "confidence": Math.round(propertyChangeData.value), "active": true }
                        );
                    }
                }, 1000);
            } else {
                hasUpdate = true;
            }
        }
    });

    return viewModel;
}

exports.createViewModel = createViewModel;