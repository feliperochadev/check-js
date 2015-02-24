# Check-JS
A tiny javascript framework for unit tests

[Project Site](http://feliperochadev.github.io/check-js/)

# How to use step by step:

- 1- Download checkjs-1.0.js [LINK](https://cdn.rawgit.com/feliperochadev/check-js/master/checkjs-1.0.js);
- 2- Reference the file or link in a html page;
- 3- Call the functions of test and assert.

# Features:

- checkAssert(condition, "message")

  Assert function via html.

- checkAssertLog(condition, "message")

  Assert function via console.log.

- checkTest("name of test", function())

  Test a set of assertions, using assert() inside the parameter function() for each assertion.

- checkTestAsync("name of test", function())

  Test a set of asynchronous/callback assertions, using assertAsync() inside the parameter function() for each assertion.
  
  
Check out Examples folder for more details.

# How to contribute:

- 1- Fork the repository;
- 2- Create an issue;
- 3- Add a doc/function/fix;
- 4- Create a pull request.
