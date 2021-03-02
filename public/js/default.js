/* matches current location with corresponding nav a and applies 
.active class to show user where they are
*/
$(function () {
    $('nav a').filter(function () {
        return this.href === location.href;
    }).addClass('active');
});