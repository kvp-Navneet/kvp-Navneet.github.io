$(document).ready(function() {

$("#submit").attr('disabled', 'disabled');

$("#lform").keyup(function() {
// To Disable Submit Button
$("#submit").attr('disabled', 'disabled');
// Validating Fields
var email = $("#email1").val();
var password = $("#password1").val();
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (!(email == "" || password == "")) {
if (filter.test(email)) {
// To Enable Submit Button
$("#submit").removeAttr('disabled');
$("#submit").css({
"cursor": "pointer",
"box-shadow": "1px 0px 6px #333"
});
}
}
});
// On Click Of Submit Button
$("#submit").click(function() {
$("#submit").css({
"cursor": "default",
"box-shadow": "none"
});
alert("you logged in successfully ! Welcome..!!");
});
})