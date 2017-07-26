

(function(){
    define(['backbone'], function(Backbone){
        var mediaCollection = Backbone.Collection.extend({
            
            parse: function(response) {
             var stories = response.stories;

              response.storylayout1= stories.splice(0,1),
             response.storylayout1.layout_name = 'storylayout1',

             response.storylayout2= stories.splice(0,4),
              response.storylayout2.layout_name = 'storylayout2',

             response.storylayout3= stories.splice(0,3),
              response.storylayout3.layout_name = 'storylayout3',

             response.storylayout4= stories.splice(0,7),
              response.storylayout4.layout_name = 'storylayout4',

             response.storylayout5= stories.splice(0,4),
              response.storylayout5.layout_name ='storylayout5',

             response.storylayout6= stories.splice(0,3),
              response.storylayout6.layout_name ='storylayout6';

              delete response.stories;
            return  _.map(response, function(stories, key){ return stories });


            },
             initialize: function() {
               
             
             },
            url: function(){
                return 'https://rio.quintype.io/api/v1/stories?limit=20'
              
            }
            
        });

        return mediaCollection;
    });
})();