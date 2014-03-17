define([
       'marionette','twigjs!templates/main_layout.html'
],
function(
Marionette,template
) {

    return Marionette.Layout.extend({
        'template': template ,
        'regions': {
            'firstRegion':'.first-region',
            'secondRegion':'.second-region'
        }

    });

});
