$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("SxLcanZTIZ5uJxDqtE65d0NPxk1zYRxZSxt6E5oq", "JdEN6kYT4thC4AzBS4nMfAavGDszgP24biD4KRmy"); 
	var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({hits: "WhereToPark"}).then(function(object) {
    });
});