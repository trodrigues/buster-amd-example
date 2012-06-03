define([], function() {
    buster.testCase("greeter tests", {
        setUp: function(done){
            var self = this;
            require(['greeter'], function(greeter){
                self.greeter = greeter;
            });
        },
        
        "greets by name" : function() {
            var name = "John Doe";
            var msg = this.greeter.greet(name);
            assert.equals("Hello, John Doe!", msg);
        }
    });
});