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
