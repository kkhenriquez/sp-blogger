describe('PostController Test \n', function() {
  beforeEach(module('spBlogger.posts.controllers'));
  beforeEach(module('spBlogger.posts.services'));

  it('Should initialize controller with 4 posts',
inject(function($rootScope,$controller,postFactory) {
  var $scope = $rootScope.$new();
  $controller('PostController', {$scope: $scope, postFactory: postFactory});
  expect($scope.posts.length).toBe(4);
}));

});

describe('SinglePostController Test \n', function() {
  beforeEach(module('spBlogger.posts.controllers'));
  beforeEach(module('ui.router'));
  beforeEach(module('spBlogger.posts.services'));

  it('Should initialize controller with 1 post',
inject(function($state,$stateParams,$rootScope,$controller,postFactory) {
  var $scope = $rootScope.$new();
  $stateParams.id = 2;
  $controller('PostDetailsController', {
    $scope: $scope,
    $state: $state,
    postFactory: postFactory
  });
  expect($scope.singlePost).not.toBe(undefined);
}));
});
