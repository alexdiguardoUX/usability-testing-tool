// Collapse / Expand
var left = document.getElementById("left");
var collapse = document.getElementById("collapse");
var expand = document.getElementById("expand");

collapse.addEventListener("click", function() {
left.style.display = "none";
});

expand.addEventListener("click", function() {
left.style.display = "block";
});