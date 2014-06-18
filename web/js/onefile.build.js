({
    appDir: "app",
    baseUrl: "../",
    mainConfigFile: "config.js",
    dir: "build",
    optimizeCss: 'none',
    optimize: "uglify2",
    removeCombined: false,
    optimizeAllPluginResources: true,
    "uglify2":{
        output: {
            beautify: true
        }
    },
    paths:{
        almond:'app/lib/bower/almond/almond',
        requirejs:'app/lib/bower/requirejs/require',
        //,
        dummy_init: 'app/dist'
    },
    stubModules: ['twigjs'],
    modules: [
        /*
        {
            name: "mod_lib",
            create:true,
            include:[
                'app/lib'
                ////'jquery',
                ////'marionette',
                ////'main',
                //'almond'
                //'requirejs'
            ]
        },
        {
            name: "main",
            create: true,
            include:[
                'app/main'
            ],
            exclude:[
                'twigjs',
                'text',
                'twig',
                'jquery',
                'backbone',
                'underscore',
                'backbone.wreqr',
                'backbone.babysitter',
                'marionette'
            ],

        },
        */
        {
            name: "dummy_init",
            create: true,
            insertRequire:['app/main'],
            include: [
                'requirejs',
                'app/main',
            ]
        }
    ],
})
