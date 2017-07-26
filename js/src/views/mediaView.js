(function() {
    define(['marionette', 'hbs!templates/headerLayoutTemplate',
            'hbs!templates/subscribeLayoutTemplate',
            'hbs!templates/carouseLayoutTemplate',
            'hbs!templates/politicsLayoutTemplate',
            'hbs!templates/foodHealthLayoutTemplate',
            'hbs!templates/recentStoriesLayout'
        ],
        function(Marionette, HeaderLayoutTemplate, SubscribeLayoutTemplate, CarouseLayoutTemplate, PoliticsLayoutTemplate, FoodHealthLayoutTemplate, RecentStoriesLayout) {

            return Marionette.ItemView.extend({
                tagName: 'div',
                className: 'story-layout',


                initialize: function() {
                    var that = this;
                },
                getTemplate: function() {
                    var that = this,
                        layoutName = that.model.get('layout_name');
                    switch (layoutName) {

                        case 'storylayout1':
                            return HeaderLayoutTemplate;
                        case 'storylayout2':
                            return SubscribeLayoutTemplate;
                        case 'storylayout3':
                            return CarouseLayoutTemplate;
                        case 'storylayout4':
                            return PoliticsLayoutTemplate;
                        case 'storylayout5':
                            return FoodHealthLayoutTemplate;
                        case 'storylayout6':
                            return FoodHealthLayoutTemplate;
                        case 'storylayout7':
                            return RecentStoriesLayout;


                    }
                },
                serializeData: function() {

                    var stories = this.model.attributes;
                    if (this.model.get('layout_name') == 'storylayout4') {
                        var leftStory = [],
                            rightStory = [],
                            centerStory = [];
                        _.each(stories, function(item, index) {

                            if (index == 0) {
                                leftStory.push(item);
                            } else if ((index == 1) || (index == 2)) {
                                centerStory.push(item);
                            } else {
                                rightStory.push(item);
                            }

                        });
                        return {
                            leftStory: leftStory,
                            rightStory: rightStory,
                            centerStory,
                            centerStory
                        };
                    } else if (this.model.get('layout_name') == 'storylayout5') {
                        var lastStory = [],
                            otherStory = [],
                            storyLegth;
                        this.model.unset('layout_name');
                        storyLength = _.size(stories) - 1;
                        _.each(stories, function(item, index) {

                            if (index == storyLength) {
                                lastStory.push(item);
                            } else {
                                otherStory.push(item);
                            }


                        });
                        return {
                            lastStory: lastStory,
                            otherStory: otherStory

                        };


                    }

                    return {
                        stories: stories
                    };

                }


            });
        });
})();