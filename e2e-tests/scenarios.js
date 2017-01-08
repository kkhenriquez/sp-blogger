describe('SP Blooger E2E Test', function() {
  browser.get('/');

  protractor = protractor.getInstance();

  it('should have 4 posts', function(){
    var posts = element.all(by.repeater('post in posts'));
    expect(posts.count()).toBe(4);
  });

  it('should redirect to first-post', function(){
    var posts = element.all(by.repeater('post in posts'));
    posts.first().then(function(postElem) {
      postElem.findElement(by.tagName('a')).then(function(a){
        a.click();
        expect(protractor.getCurrentUrl()).toMatch('posts/1/first-post');
      });
    });
  });
});
