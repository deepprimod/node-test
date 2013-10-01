var request = require('request');

describe("should respond with hello world",function(){
it("should respond with hello world", function(done) {
  request("http://localhost:3000/", function(error, response, body){
    expect(body).toEqual("hello world");
    done();
  });
});
});
