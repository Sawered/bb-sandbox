// Start the main app logic.
define([
        'jquery','marionette','application'
],
function(
$,Marionette,application
) {
    console.log('Main loaded');

    //var app = new Marionette.Application({});
    application.start();
    //console.log(application);
});
//console.log('main file loaded');
