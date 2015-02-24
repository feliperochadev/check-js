//create the container with the ul results
window.addEventListener("load",function ()
{
    var container = document.createElement("div");
    container.id = "check-results-container";
    var ul = document.createElement("ul");
    ul.id = "check-results";
    container.appendChild(ul);
    document.body.appendChild(container);
}, false);
//Returns the result of assert in html, green for true and red for false
function checkAssert(value, desc)
{
    var container = document.getElementById("check-results");
    var li = document.createElement("li");
    li.style.color = value ? "green" : "red";
    li.appendChild(document.createTextNode(desc));
    container.appendChild(li);
}
//Returns the result of assert in console (developer tools, firebug, etc), green for true and red for false
function checkAssertLog(value, desc)
{
    //if Browser is IE use console.info for pass and console.error for fail
    //because IE does not support style in log
    if(msie())
    {
        return  value ? console.info(desc) : console.error(desc);
    }
    value ? console.log('%c'+desc, 'color:green;') : console.log('%c'+desc, 'color:red;');
}
//check if browser is IE
function msie() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE");
    var trident = ua.indexOf("Trident");
    if (msie > 0 || trident > 0) {
        return true;
    }
    return false;
}
(function() {
    var results;
    this.assert = function assert(value, desc) {
        var li = document.createElement("li");
        li.style.color = value ? "green" : "red";
        li.appendChild(document.createTextNode(desc));
        results.appendChild(li);
        if (!value) {
            li.parentNode.parentNode.style.color = "red";
        }
        return li;
    };
    this.checkTest = function test(name, fn) {
        results = document.getElementById("check-results");
        results = assert(true, name).appendChild(document.createElement("ul"));
        fn();
    }
})();