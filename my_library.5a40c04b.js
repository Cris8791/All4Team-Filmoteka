document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".to-search-form").addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("darkModeToggle"),t=document.querySelector("body"),o=document.querySelector("main");function d(){t.classList.toggle("dark-mode"),o.classList.toggle("dark-mode");const e=o.classList.contains("dark-mode");localStorage.setItem("darkMode",e)}e.addEventListener("click",(()=>{d()}));"true"===localStorage.getItem("darkMode")&&d()}));
//# sourceMappingURL=my_library.5a40c04b.js.map
