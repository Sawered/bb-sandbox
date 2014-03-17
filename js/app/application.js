// Start the main app logic.
define([
       'marionette'
],
function(
Marionette
) {

    var app = new Marionette.Application({});
    app.addInitializer(function(){
        console.log('App Started');

    });
    console.log('App Created');
    return app;

});
//console.log('App file loaded');
