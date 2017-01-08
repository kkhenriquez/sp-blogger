angular.module('spBlogger.posts.controllers',[]).controller(
  'PostController', ['$scope', 'postFactory', function($scope, postFactory) {

    $scope.getAllPosts = function() {
      return postFactory.getAll();
    };
    $scope.posts = $scope.getAllPosts();
  }])

.controller('PostDetailsController', ['$state-Params', '$state', '$scope', 'postFactory',
function($state-Params, $state, $scope, postFactory) {

  $scope.getPostById = function(id) {
    return postFactory.getPostById(id);
  };
  $scope.closePost = function() {
    $state.go('allPosts');
  };
}]);
