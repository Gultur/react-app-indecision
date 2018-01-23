"use strict";

var app = {
    visible: false
};

var onChangeVisibility = function onChangeVisibility(e) {
    if (app.visible) {
        app.visible = false;
    } else {
        app.visible = true;
    }

    render();
};

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        !app.visible && React.createElement(
            "button",
            { onClick: onChangeVisibility },
            "Show details"
        ),
        app.visible && React.createElement(
            "button",
            { onClick: onChangeVisibility },
            "Hide details"
        ),
        app.visible && React.createElement(
            "p",
            null,
            "this is some info"
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
render();
