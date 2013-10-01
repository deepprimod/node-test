var request = require('http');

describe("should respond with hello world",function(){
it('Server should respond to /', function (done){
  request.get('http://localhost:1337/', function(response){
    expect(response.statusCode).toBe(404);
   done();
  });
});

});

   
