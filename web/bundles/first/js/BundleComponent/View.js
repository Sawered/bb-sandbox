define(['marionette','twigjs!firstbundle/BundleComponent/template.html.twig'],function(Marionette,template){

    var  View = Marionette.ItemView.extend({
        'template':template,
        'triggers': {
            'click button': 'make-ok'
        },
        onShow: function(){
            this.delegateEvents();
            if( typeof checkme == 'object'){
                console.log('checkme result:');
                console.log(checkme == this.el);
            }else{
                console.log('checkme not exists');
                checkme = this.el
            }
        }

    });

    return View;
});
