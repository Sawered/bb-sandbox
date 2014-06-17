({
    baseUrl: "js/",
    mainConfigFile: "js/config.js",
    optimize: "uglify2",
    paths:{
        almond:'../lib/almond/almond',
        requirejs:'../lib/requirejs/require'
    },
    include:['almond','init'],
    out: "dist/app.js"
})

