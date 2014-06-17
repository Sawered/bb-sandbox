// Start the main app logic.
define([
       'marionette',
       'backbone',
       'app/mainLayout',
       'app/itemView'
],
function(
        Marionette,
        Backbone,
        Layout,
        ItemView
) {

    var app = new Marionette.Application({});
    app.addInitializer(function(config){
        console.log('App Started');

        app.addRegions({
            'mainRegion': config.mainRegion
        })

        var layout = new Layout();

        var itemModel =  new Backbone.Model({
            'text':'Элемент',
            'caption':'Нажми меня'
        });

        var view = new ItemView({'model':itemModel});

        layout.on('show',function(){
            this.firstRegion.show(view);
            //next is failed
            this.secondRegion.show({render:function(){return "Look at first region"}});
        });

        this.listenTo(view,'call',function(){
            console.log('Button pushed');
        });

        this.mainRegion.show(layout);



    });
    console.log('App Created');
    return app;

});
//console.log('App file loaded');
