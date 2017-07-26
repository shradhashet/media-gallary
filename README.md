# Media Gallary

## Technologies used

#### Backbone JS

Backbone.js gives structure to web applications by providing models with key-value binding and custom events, 
collections with a rich API of enumerable functions, views with declarative event handling, and connects it all
 to your existing API over a RESTful JSON interface.
Marionette JS
The Backbone Framework, Marionette simplifies your Backbone application code with robust views and architecture solutions
Marionette provides the structure required for those types of applications, and also provides guidance on how to structure 
larger JavaScript codebases.Marionette addresses the biggest problem with backbone, which is all the boilerplate in 
the view layer. It is also easy to make your own component hierarchies and provides minimal structure for everything you need. 

#### Handlebar js

Handlebar provides built in helpers and allows developers to write custom helper based on the login require. 
 Custom helpers created in handlebar js is reusable the in the application.
 Underscore template doesn’t have support for the model attributes with hyphen (-)
   For example: author-name;
   If the attribute author-name is passed to underscore template then it throws error as hyphen is consider 
   as minus operator while template compilation.
     
  **Custom helper created in this application:**
 
    **dateFormatting.js:**
	Converts UTC format date into the string, to show the story posted time from now .
	This helper uses moment js library to convert UTC date into expected format.
	
	**uppercase.js:**
    Converts all section names into Upper-case.

 #### Moment JS
Used in dateFormatting.js  to format given date .


#### LESS

Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow 
variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themeable and extendable.

### Structure and Files

 + js
    + src
	    + controllers
        + models
        + router
        + templates
        + views
	    + application.js
	    + main.js
  + images
  + libs
	+ bootstrap
	+ jquery
	+ require
	+ backbone 
	+ backbone.marionette
	+ handlebars
	+ hbs
	+ moment
	+ underscore
 + css
 + less
 + index.html
 + package.json

     
 The skeleton implement <a target="/js/main" href-"http://requirejs.org/">RequireJS to load libraries and modules to start a  MarionetteJS App.

Collections and models and their integration with Views in outside the scope this Skeleton, becuase is different in each implemetantion. 

### Errors

If you run this Marionette JS Application without a Web Server ( Loading directly the index.html file), you will get the following error.

XMLHttpRequest cannot load file:///YOURPATH/marionette-skeleton-app/templates/header.tpl. Cross origin requests are only supported for HTTP.

### Routing
implements the routes defined in your application.
Routes: home

file: js/sec/router/appRouter.js

### Usage:

Load the index.html file, the home route must be executed and you will get a bootstrap application running
route methode will instantiate MediaController controller.to load the futher require views and models.
  
##Controller
main controller responsible for loading required views and models and collections
file: js/src/controller/MediaController.js

### Views

All views were encapsuled as RequireJS module and instanciate in Controller functions and Main Application.

Views can be reused in other controllers

### Templates

All templates where created in templates folder using handlebar.js logic and loaded using the pluging hbs

Template are imported in Views.

## Features
**Webiste is designed with responsive layout can be accessed with mobile,tablet,desktop.**
**Has lazy load Collection which fetches data on scroll**
**Has lazy load infinity scroll to improve the load performance**

**hosted wbsite url**
https://media-gallary-37131.netlify.com

