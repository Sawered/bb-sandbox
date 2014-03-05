// Set up the paths for the application.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        "jquery": "jquery/dist/jquery.min",
        backbone : 'backbone/backbone',
        underscore : 'underscore/underscore',
        'backbone.wreqr' : 'backbone.wreqr/lib/amd/backbone.wreqr',
        //'backbone.eventbinder' : 'backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter' : 'backbone.babysitter/lib/amd/backbone.babysitter',
        //'backbone.localstorage': 'backbone.localstorage/backbone.localStorage',
        marionette : 'marionette/lib/core/amd/backbone.marionette'


    },
    shim : {
    }
});

require(['../js/main']);
