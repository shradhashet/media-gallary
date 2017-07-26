define(['marionette', 'controller/mediaController', 'application'],
  function(Marionette, MediaController, app) {

    var MyRouter = Marionette.AppRouter.extend({
      routes: {
        '': 'home',
      },
      home: function() {
        app.storySection.show(new MediaController({

        }));
      }

    });

    return new MyRouter();
  });