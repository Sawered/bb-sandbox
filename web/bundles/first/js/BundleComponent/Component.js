define(['marionette','underscore','firstbundle/BundleComponent/View'],function(Marionette,_,View){


    Component = function (App,Region){
        this.region = Region;
        this.view = new View();

        this.listenTo(this.view,'close',function(){
            console.log('stop listen view');
            //this.stopListening(this.view);
        });

        this.listenTo(this.view,'make-ok',function(){
            console.log('component recieve make-ok from view');
            this.trigger('button:make-ok');
        });

        this.listenTo(this.view,'show',function(){
            console.log('compoentn view show');
        });

    };

    _.extend(Component.prototype,Marionette.Controller.prototype,{
        show : function (){
            console.log(this.view.$el);
            //this.view.delegateEvents(this.view.triggers);
            this.region.show(this.view);
        }
    });



    return Component;
});
