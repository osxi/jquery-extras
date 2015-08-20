;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Index = factory();
  }
}(this, function() {
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Index = factory();
  }
}(this, function() {
  'use strict';

  $.fn.barfBackward = function() {
    var firstChild = $(this).children().first();
    return $(this).before(firstChild);
  };

  $.fn.slurpBackward = function() {
    return $(this)
      .prev()
      .prependTo($(this));
  };

  return {
    barfBackward: $.fn.barfBackward,
    slurpBackward: $.fn.slurpBackward
  };
}));

return Index;
}));
