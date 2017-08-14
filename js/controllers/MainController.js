app.controller('booksCtrl', ['$scope','$http', function(s, h) {
  s.method = 'GET';
  s.url = "https://s3-us-west-2.amazonaws.com/joshuamfernandes/california.json";
  h({method:s.method, url:s.url})
    .then(function(response) {
      s.data = response.data;
    }, function(response){
      s.data = response.data || 'Request failed';
    });
}]);
