define([], function() {
    var upperCase = function(data) {
        if (data) {
           return data.toUpperCase();
        }
                               
    };

    Handlebars.registerHelper('upperCase', upperCase);
});
