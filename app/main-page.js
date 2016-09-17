var createViewModel = require("./main-view-model").createViewModel;
var observableModule = require("data/observable");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();

   var model = new observableModule.Observable();
   page.bindingContext = model;
    model.set("confidence", 750);
    console.log();
/*    var options = {
        sourceProperty: "confidence",
        targetProperty: "value",
        twoWay: true
    };
    slider.bind(options, model);
    model.set("confidence", 750);*/
}
exports.onNavigatingTo = onNavigatingTo;