(function initTheme() {
  var theme = localStorage.getItem("general")
    ? JSON.parse(localStorage.getItem("general")).uiMode
    : "light";
  console.log("setting dark mode in theme.js");
  console.log(theme);
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
