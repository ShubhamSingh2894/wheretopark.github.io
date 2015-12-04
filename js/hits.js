$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("SxLcanZTIZ5uJxDqtE65d0NPxk1zYRxZSxt6E5oq", "JdEN6kYT4thC4AzBS4nMfAavGDszgP24biD4KRmy"); 
	var TestObject1 = Parse.Object.extend("TestObject1");
    var testObject1 = new TestObject1();
    testObject1.save({hits: "WhereToPark"}).then(function(object) {
    });
});
