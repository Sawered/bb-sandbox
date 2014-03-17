// Set up the paths for the application.
requirejs.config({
    baseUrl: 'js/app',
    paths: {
        "jquery": "../../lib/jquery/dist/jquery.min",
        backbone : '../../lib/backbone/backbone',
        underscore : '../../lib/underscore/underscore',
        'backbone.wreqr' : '../../lib/backbone.wreqr/lib/amd/backbone.wreqr',
        //'backbone.eventbinder' : '../../lib/backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter' : '../../lib/backbone.babysitter/lib/amd/backbone.babysitter',
        //'backbone.localstorage': '../../lib/backbone.localstorage/backbone.localStorage',
        marionette : '../../lib/marionette/lib/core/amd/backbone.marionette'


    },
    shim : {
    }
});
//console.log('Config loaded');
