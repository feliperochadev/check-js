# Check-JS
A tiny javascript framework for unit tests

[Project Site](http://feliperochadev.github.io/check-js/)

# How to use step by step:

- 1- Download checkjs-1.1.js [LINK](https://cdn.rawgit.com/feliperochadev/check-js/master/src/checkjs-1.1.js);
- 2- Reference the file or link in a html page;
- 3- Call the functions of test and assert.

# Features:

- checkJS.assert(condition, "message")

  Assert function via html.

- checkJS.assertLog(condition, "message")

  Assert function via console.log.

- checkJS.test("name of test", function())

  Test a set of assertions, using checkJS.assert inside the parameter function() for each assertion.

- checkJS.asyncTest("name of test", function())

  Test a set of asynchronous/callback assertions, using checkJS.assert inside the parameter function() for each assertion.
  
  
Check out Examples folder for more details.

# How to contribute:

- 1- Fork the repository;
- 2- Create an issue;
- 3- Add a doc/function/fix;
- 4- Create a pull request.

# Release History

- 2015-02-25   v1.1   Modularized framework
- 2015-02-22   v1.0   Release usable version

# Old Versions:

- [1.0](https://rawgit.com/feliperochadev/check-js/master/src/old-versions/checkjs-1.0.js)
