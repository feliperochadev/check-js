//Returns the result of assert in html, green for true and red for false
function checkAssert(value, desc)
{
    var ul = document.createElement("ul");
    ul.id = "results";
    document.body.appendChild(ul);
    var li = document.createElement("li");
    li.style.color = value ? "green" : "red";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
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
