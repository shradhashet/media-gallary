/**
 * <Describe file contents>
 * @Sradha.shet
 * 
 */
(function() {
    'use strict';
    define(['marionette',
            'models/mediaCollection',
            'views/mediaView'
        ],
        function(Marionette, MediaCollection, MediaView) {
            return Marionette.CollectionView.extend({
                childView: MediaView,
                className: 'media',

                initialize: function(options) {
                    var that = this
                    that.limitCounter = 0;
                    this.collection = new MediaCollection();
                    this.collection.fetch({
                        data: {
                            offset: that.limitCounter
                        }
                    });
                },
                onRender: function() {
                    var that = this,
                        limit;
                    $('.media-section').bind('scroll', function() {
                        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 50) {
                            that.limitCounter = that.limitCounter + 20;
                            that.collection.fetch({
                                remove: false,
                                data: {
                                    offset: that.limitCounter
                                }
                            });

                        }
                    });
                }

            });
        });
})(window);