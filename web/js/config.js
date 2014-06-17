// Set up the paths for the application.
requirejs.config({
    baseUrl: 'js',
    paths: {
        'twigjs': 'app/lib/bower/requirejs.twig/requirejs.twig',
        'text': 'app/lib/bower/requirejs-plugins/lib/text',
        'twig':'app/lib/bower/twig.js/twig',
        "jquery": "app/lib/bower/jquery/dist/jquery.min",
        backbone : 'app/lib/bower/backbone/backbone',
        underscore : 'app/lib/bower/underscore/underscore',
        //'backbone.eventbinder' : '../../lib/backbone.eventbinder/lib/amd/backbone.eventbinder',
        //'backbone.localstorage': '../../lib/backbone.localstorage/backbone.localStorage',
        'backbone.wreqr' : 'app/lib/bower/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter' : 'app/lib/bower/backbone.babysitter/lib/amd/backbone.babysitter',
        marionette : 'app/lib/bower/marionette/lib/core/amd/backbone.marionette'


    },
    shim : {
    }
});
//console.log('Config loaded');
