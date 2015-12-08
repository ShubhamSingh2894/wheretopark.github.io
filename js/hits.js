$(function() {
	Parse.$ = jQuery;
	Parse.initialize("ORdRb6ZtoTRSIUBeDKCcpigKQR9Pr6YJjeguuN9t", "ec8NHsZDP17pTdRjBKQFAPxB8ihduGt6e8NAGdaH");
	var TestObject1 = Parse.Object.extend("TestObject1");
    var testObject1 = new TestObject1();
    testObject1.save({hits: "WhereToPark"}).then(function(object) {
    });
});
