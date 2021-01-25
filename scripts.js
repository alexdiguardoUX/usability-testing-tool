// Collapse / Expand
var dialogContent = document.getElementById("content-wrap");
var collapse = document.getElementById("collapse");
var expand = document.getElementById("expand");

collapse.addEventListener("click", function() {
dialogContent.style.display = "none";
});

expand.addEventListener("click", function() {
dialogContent.style.display = "block";
});