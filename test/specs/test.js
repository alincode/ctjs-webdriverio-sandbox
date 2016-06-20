var assert = require('assert');

describe('mokayo page', function() {
  it('should have the right title', function() {
    browser.url('http://blog.mokayo.com');
    var title = browser.getTitle();
    assert.equal(title, '教你所想學的，用眼樂讀 - blog.mokayo.com');
  });
});
