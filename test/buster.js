var config = module.exports;

config["jquery-extras"] = {
  rootPath: "../",
  environment: "browser",
  sources: [
    'index.js'
  ],
  deps: [
    'node_modules/jquery/dist/jquery.min.js'
  ],
  extensions: [
    require("buster-lint")
  ],
  "buster-lint": {
    excludes: [ 'jquery' ],
    linterOptions: {
      asi         : true,  // true, if automatic semicolon insertion should be tolerated
      bitwise     : true,  // true, if bitwise operators should not be allowed
      boss        : true,  // true, if advanced usage of assignments should be allowed
      browser     : true,  // true, if the standard browser globals should be predefined
      couch       : true,  // true, if CouchDB globals should be predefined
      curly       : true,  // true, if curly braces around all blocks should be required
      debug       : true,  // true, if debugger statements should be allowed
      devel       : true,  // true, if logging globals should be predefined (console, alert, etc.)
      dojo        : true,  // true, if Dojo Toolkit globals should be predefined
      eqeqeq      : true,  // true, if === should be required
      eqnull      : true,  // true, if == null comparisons should be tolerated
      es5         : true,  // true, if ES5 syntax should be allowed
      esnext      : true,  // true, if es.next specific syntax should be allowed
      evil        : true,  // true, if eval should be allowed
      expr        : true,  // true, if ExpressionStatement should be allowed as Programs
      forin       : true,  // true, if for in statements must filter
      funcscope   : true,  // true, if only function scope should be used for scope tests
      globalstrict: true,  // true, if global "use strict"; should be allowed (also enables 'strict')
      immed       : true,  // true, if immediate invocations must be wrapped in parens
      iterator    : true,  // true, if the `__iterator__` property should be allowed
      jquery      : true,  // true, if jQuery globals should be predefined
      lastsemic   : true,  // true, if semicolons may be ommitted for the trailing statements inside of a one-line blocks.
      latedef     : true,  // true, if the use before definition should not be tolerated
      laxbreak    : true,  // true, if line breaks should not be checked
      laxcomma    : true,  // true, if line breaks should not be checked around commas
      loopfunc    : true,  // true, if functions should be allowed to be defined within loops
      mootools    : true,  // true, if MooTools globals should be predefined
      multistr    : true,  // true, allow multiline strings
      newcap      : true,  // true, if constructor names must be capitalized
      noarg       : true,  // true, if arguments.caller and arguments.callee should be disallowed
      node        : true,  // true, if the Node.js environment globals should be predefined
      noempty     : true,  // true, if empty blocks should be disallowed
      nonew       : true,  // true, if using `new` for side-effects should be disallowed
      nonstandard : true,  // true, if non-standard (but widely adopted) globals should be predefined
      nomen       : true,  // true, if names should be checked
      onevar      : true,  // true, if only one var statement per function should be allowed
      onecase     : true,  // true, if one case switch statements should be allowed
      passfail    : false,  // true, if the scan should stop on first error
      plusplus    : true,  // true, if increment/decrement should not be allowed
      predef      : ["define"],  // Custom globals for requirejs
      proto       : true,  // true, if the `__proto__` property should be allowed
      prototypejs : true,  // true, if Prototype and Scriptaculous globals should be predefined
      regexdash   : true,  // true, if unescaped first/last dash (-) inside brackets should be tolerated
      regexp      : true,  // true, if the . should not be allowed in regexp literals
      rhino       : true,  // true, if the Rhino environment globals should be predefined
      undef       : true,  // true, if variables should be declared before used
      scripturl   : true,  // true, if script-targeted URLs should be tolerated
      shadow      : true,  // true, if variable shadowing should be tolerated
      smarttabs   : true,  // true, if smarttabs should be tolerated (http://www.emacswiki.org/emacs/SmartTabs)
      strict      : true,  // true, if the "use strict"; pragma is required
      sub         : true,  // true, if all forms of subscript notation are tolerated
      supernew    : true,  // true, if `new function () { ... };` and `new Object;` should be tolerated
      trailing    : true,  // true, if trailing whitespace rules apply
      validthis   : true,  // true, if 'this' inside a non-constructor function is valid.
      white       : true,  // true, if strict whitespace rules apply
      wsh         : true   // true, if the Windows Scripting Host environment globals should be predefined
    }
  },
  tests: [
    'test/*-test.js'
  ]
};
