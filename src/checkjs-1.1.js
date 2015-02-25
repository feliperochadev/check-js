/*
 Check-JS: A tiny javascript framework for unit tests
 version: 1.1
 Created by: @feliperochadev
 Enjoy, feedback and contribute.
 */

 var checkJS = (function(window, document) {
  'use strict';
    //Container of ul element
    var results;
    //Used in async tests
    var queue = [], paused;
    //Check if browser is IE
    function msie(window) {
        var ua = navigator.userAgent;
        var msie = ua.indexOf("MSIE");
        var trident = ua.indexOf("Trident");
        if (msie > 0 || trident > 0) {
            return true;
        }
        return false;
    }
    //Used in async tests
    function runAsyncTest()
    {
        if (!paused && queue.length){
            queue.shift()();
            if(!paused)
            {
                checkJS.resume;
            }
        }
    }

    var checkJS = 
    {
        //create the container with the ul results
        init: function(window, document){
            var container = document.createElement("div");
            container.id = "check-results-container";
            results = document.createElement("ul");
            results.id = "check-results";
            container.appendChild(results);
            document.body.appendChild(container);
        },
        //Returns the result of assert in html, green for true and red for false
        assert : function(value, desc)
        {
            var li = document.createElement("li");
            li.style.color = value ? "green" : "red";
            li.appendChild(document.createTextNode(desc));
            results.appendChild(li);
            if (!value)
            {
                li.parentNode.parentNode.style.color = "red";
            }
            return li;
        },
        //Returns the result of assert in console (developer tools, firebug, etc), green for true and red for false
        assertLog : function(value, desc)
        {
            //if Browser is IE use console.info for pass and console.error for fail
            //because IE does not support style in log
            if(msie())
            {
                return  value ? console.info(desc) : console.error(desc);
            }
            value ? console.log('%c'+desc, 'color:green;') : console.log('%c'+desc, 'color:red;');
        },
        //Create a set of tests inside the fn argument
        test : function(name, fn){
            results = document.getElementById("check-results");
            results = checkJS.assert(true, name).appendChild(document.createElement("ul"));
            fn();
        },
        //Create a set of async tests inside the fn argument
        asyncTest : function(name, fn){
            queue.push(function(){
                results = document.getElementById("check-results-container");
                results = checkJS.assert(true, name).appendChild(
                    document.createElement("ul")
                    );
                fn();
            });
            runAsyncTest();
        },
        pause : function()
        {
            paused = true;
        },
        resume : function()
        {
            paused = false;
            setTimeout(runTest, 1);
        }

    };
    window.addEventListener("load",function ()
        {checkJS.init(window, document);
        },false);
    return checkJS;
    
})(window, document);
