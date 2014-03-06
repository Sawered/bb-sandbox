({
    appDir: ".",
    baseUrl: "./app",
    mainConfigFile: "config.js",
//    dir: "../../js/build/",
    dir: "../dist",
    optimize: "uglify2",
    removeCombined: true,
    paths:{
        almond:'../../lib/almond/almond',
        requirejs:'../../lib/requirejs/require'
    },
    modules: [
        //{
            //name: "../init",
            //include:[
                ////'jquery',
                ////'marionette',
                ////'main',
                ////'almond'
                //'requirejs'
            //]
        //},
        {
            name: "almond",
            include:[
                //'jquery',
                //'marionette',
                //'main',
                //'almond'
                '../init'
            ]
        }
    ],
    //"out": "js/main-built.js"
})
