$(function() {
	Parse.$ = jQuery;
	Parse.initialize("ORdRb6ZtoTRSIUBeDKCcpigKQR9Pr6YJjeguuN9t", "ec8NHsZDP17pTdRjBKQFAPxB8ihduGt6e8NAGdaH");
	var visits_16_12 = Parse.Object.extend("visits_16_12");
    var visits = new visits_16_12();
    visits.save({hits: "WhereToPark"}).then(function(object) {
    });
});
