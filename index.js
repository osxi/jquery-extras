(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.Index = factory(root.jQuery);
  }
}(this, function($) {
  'use strict';

  $.fn.barfBackward = function() {
    var firstChild = $(this).children().first();
    return $(this).before(firstChild);
  };

  $.fn.barfForward = function() {
    var lastChild = $(this).children().last();
    return $(this).after(lastChild);
  };

  $.fn.slurpBackward = function() {
    return $(this)
      .prev()
      .prependTo($(this));
  };

  $.fn.slurpForward = function() {
    return $(this)
      .next()
      .appendTo($(this));
  };

  return {
    barfBackward: $.fn.barfBackward,
    barfForward: $.fn.barfForward,
    slurpBackward: $.fn.slurpBackward,
    slurpForward: $.fn.slurpForward
  };
}));
