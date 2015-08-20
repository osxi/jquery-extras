(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {
  'use strict';

  $.fn.barf = function() {
    // return $(this)
    //   .children()
    //   .first()
    //   .prependTo($(this).parent());

    var firstChild = $(this).children().first();
    return $(this).before(firstChild);
  };

  $.fn.slurp = function() {
    return $(this)
      .prev()
      .prependTo($(this));
  };

  return {
    barf: $.fn.barf,
    slurp: $.fn.slurp
  };
}));
