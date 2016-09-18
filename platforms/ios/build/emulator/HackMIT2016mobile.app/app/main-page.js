var createViewModel = require("./main-view-model").createViewModel;
var observableModule = require("data/observable");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.onNavigatingTo = onNavigatingTo;