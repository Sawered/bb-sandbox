({
    appDir: "./app",
    baseUrl: ".",
    //mainConfigFile: "config.js",
//    dir: "../../js/build/",
    dir: "../app-build",
    optimize: "uglify2",
    modules: [
        {
            name: "initz",
            include:[
                'jquery',
                'marionette',
                'init',
            ]
        }
    ],
    //"out": "js/main-built.js"
})
