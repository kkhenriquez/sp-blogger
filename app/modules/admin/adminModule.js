angular.module('spBlogger.admin', ['spBlogger.admin.controllers', 'spBlogger.admin.services'])

.config(['$stateProvider',
function($stateProvider) {
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
    templateUrl: 'modules/admin/views/update-post.html',
    controller: 'PostUpdateController'
  }).state('admin.postViewAll', {
    url: '',
    templateUrl: 'modules/admin/views/all-posts.html',
    controller: 'PostListController'
  });
}]);
