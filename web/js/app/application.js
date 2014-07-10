// Start the main app logic.
define([
       'marionette',
       'backbone',
       'app/mainLayout',
       'app/itemView',
       'firstbundle/BundleComponent/Component'
],
function(
        Marionette,
        Backbone,
        Layout,
        ItemView,
        BundleComponent
) {

    var app = new Marionette.Application({});
    app.addInitializer(function(config){
        console.log('App Started');

        app.addRegions({
            'mainRegion': config.mainRegion
        });

        var layout = new Layout();

        var itemModel =  new Backbone.Model({
            'text':'Элемент',
            'caption':'Нажми меня'
        });

        var view = new ItemView({'model':itemModel});

        var component = this.component = new BundleComponent(app,layout.bundleRegion);
        this.listenTo(component,'close',function(){
            this.stopListening(component);
        });
        this.listenTo(component,'button:make-ok',function(){
            console.log('Make ok recieved');

        });

        layout.on('show',function(){
            console.log('Layout onShow');

            this.firstRegion.show(view);
            //next is failed
            var $el =$('<div>very strange view</div>');
            var nview = {
                render:function(){
                    return this;
                },
                '$el': $el,
                'el': $el.get(0),
                isClosed: false
            };

            this.secondRegion.show(nview);

            component.show();

        });
        //console.log(layout);

        this.listenTo(view,'call',function(){
            console.log('Button pushed');
            layout.bundleRegion.reset();
            console.log('bundleRegion reseted');
            this.component.show();
        });

        this.mainRegion.show(layout);

    });
    console.log('App Created');
    return app;

});
//console.log('App file loaded');
