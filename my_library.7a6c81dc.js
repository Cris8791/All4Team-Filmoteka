document.addEventListener("DOMContentLoaded",(()=>{toSearchFormButton=document.querySelector(".to-search-form"),toSearchFormButton.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("darkModeToggle"),t=document.querySelector("main");function o(){t.classList.toggle("dark-mode");const e=t.classList.contains("dark-mode");localStorage.setItem("darkMode",e)}e.addEventListener("click",(()=>{o()}));"true"===localStorage.getItem("darkMode")&&o()}));
//# sourceMappingURL=my_library.7a6c81dc.js.map