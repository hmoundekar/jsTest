$("#navbar-template").load("header.html");
$("footer").load("footer.html");

$.fn.andSelf = function() {
    return this.addBack.apply(this, arguments);
}