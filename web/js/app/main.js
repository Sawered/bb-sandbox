define([
        'jquery','marionette','app/application'
],
function(
$,Marionette,application
) {
    console.log('Main loaded');

    //var app = new Marionette.Application({});
    application.start({
        'mainRegion':'.main-region'
    });
    //console.log(application);
});
//console.log('main file loaded');
