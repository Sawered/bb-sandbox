define([
       'marionette','twigjs!app/templates/item_view.html'
],
function(
Marionette,template
) {

    return Marionette.ItemView.extend({
        'template': template,
        triggers:{
            'click button':'call'
        }

    });

});

