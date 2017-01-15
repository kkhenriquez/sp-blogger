angular.module('spBlogger.admin', ['spBlogger.admin.controllers'])

.config(['$stateProvider', '$locationProvider',
function($stateProvider, $locationProvider) {
  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'modules/admin/views/home.html',
    controller: 'AdminController',
    abstract: true
  }).state('admin.postNew', {
    url: '/posts/new',
    templateUrl: 'modules/admin/views/new-post.html',
    controller: 'PostCreationController'
  }).state('admin.postUpdate', {
    url: '/posts/:id/edit',
    templateUrl: 'modules/admin/view/update-post.html',
    controller: 'PostUpdateController'
  }).state('admin.postViewAll', {
    url: '',
    templateUrl: 'modules/admin/views/all-posts.html',
    controller: 'PostListController'
  });
}]);
