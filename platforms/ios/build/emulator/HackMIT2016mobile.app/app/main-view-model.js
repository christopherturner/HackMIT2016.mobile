var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();

    viewModel.on(Observable.propertyChangeEvent, function(propertyChangeData) {

        if (propertyChangeData.propertyName === "confidence") {
            console.log(propertyChangeData.value);
        }
    })

    return viewModel;
}

exports.createViewModel = createViewModel;