var themeToggle = document.getElementById("themeToggle");
var body = document.body;
var storedTheme = window.localStorage.getItem("theme");

if (storedTheme === "dark") {
body.classList.add("dark");
}

if (themeToggle) {
themeToggle.addEventListener("click", function () {
var isDark = body.classList.toggle("dark");
window.localStorage.setItem("theme", isDark ? "dark" : "light");
});
}

var tips = [
"今天写一点点代码，也是进步。",
"保持简单，先让它能用，再考虑优化。",
"一次专注一件小事，更容易坚持下去。",
"多动手尝试，比只看教程更有效。",
"遇到问题先自己试一试，再去搜索答案。"
];

var tipButton = document.getElementById("tipButton");
var tipText = document.getElementById("tipText");

if (tipButton && tipText) {
tipButton.addEventListener("click", function () {
var index = Math.floor(Math.random() * tips.length);
tipText.textContent = tips[index];
});
}

var yearSpan = document.getElementById("year");
if (yearSpan) {
yearSpan.textContent = new Date().getFullYear().toString();
}

