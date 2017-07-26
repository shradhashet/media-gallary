define(['moment'], function(moment) {
    var dateFormatting = function(date) {
        if (date) {
           var dateFromNow = moment(date).fromNow();
            return dateFromNow;
        }
                           
    }

    Handlebars.registerHelper('dateFormatting', dateFormatting);
});
