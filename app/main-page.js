var sliderModule = require("ui/slider");
var createViewModel = require("./main-view-model").createViewModel;
var observableModule = require("data/observable");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();

    var slider = new sliderModule.Slider();
    slider.maxValue = 1000;
    slider.value = 500;
    slider.minValue = 0;
    var model = new observableModule.Observable();
    model.set("confidence", 750);
    console.log();
    var options = {
        sourceProperty: "confidence",
        targetProperty: "value",
        twoWay: true
    };
    slider.bind(options, model);
    model.set("confidence", 750);
    console.log();

}
exports.onNavigatingTo = onNavigatingTo;