function e(e){const t=e.map((({id:e,poster_path:t,title:n,genres:r,release_year:o,vote_average:c})=>`<div>\n    <img id="${e}" src="${t}" alt="movie poster" loading="lazy" />\n            <p class="movie-title">   ${n} </p>\n            <p class="movie-short-descr"> ${r} | ${o} | <span>${c}</span></p>\n        </div>`)).join("");document.querySelector(".movies-div").innerHTML=t}let t="";function n(e,n){t="",n.map((e=>{t+=JSON.stringify(e)+"*"})),t=t.slice(0,t.length-1),localStorage.setItem(e,t)}function r(e){var n=[];try{t=localStorage.getItem(e)}catch(e){console.error(e)}return t?t.split("*").forEach((e=>{n.push(JSON.parse(e))})):t="",n}var o,c=[],i=[],d=[],u=!0;function l(){u?(console.log("clear watched list"),n("filmoteka-watched",c=[])):(console.log("clear queue list"),n("filmoteka-queue",i=[]));document.querySelector(".movies-div").innerHTML=""}document.addEventListener("DOMContentLoaded",(function(){c=r("filmoteka-watched"),i=r("filmoteka-queue");const t=document.querySelector(".clear-btn");if(t.innerText="CLEAR WATCHED LIST",c.length>0)e(c);else{document.querySelector(".error-message").innerText='Oops! Your "watched" library is empty!'}t.addEventListener("click",l)}));const s=document.querySelector(".watched-btn"),a=document.querySelector(".queue-btn");s.addEventListener("click",(function(){u=!0,document.querySelector(".clear-btn").innerText="CLEAR WATCHED LIST";const t=document.querySelector(".error-message");if(0!==c.length)t.innerText="",e(c);else{t.innerText='Oops! Your "watched" library is empty!';document.querySelector(".movies-div").innerHTML=""}})),a.addEventListener("click",(function(){u=!1,document.querySelector(".clear-btn").innerText="CLEAR QUEUE LIST";const t=document.querySelector(".error-message");if(0!==i.length)t.innerText="",e(i);else{t.innerText='Oops! Your "queue" library is empty!';document.querySelector(".movies-div").innerHTML=""}}));const m=document.getElementById("closeModalBtn2"),y=document.querySelector(".bckdrp");m.addEventListener("click",(function(){y.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(y.style.display="none")})),y.addEventListener("click",(function(e){e.target===y&&(y.style.display="none")}));const v=document.querySelector(".wbtn2"),q=document.querySelector(".qbtn2");v.addEventListener("click",(function(){if(o.watched){o.watched=!1,v.innerHTML="Add to watched";let e=c.findIndex((e=>e.id===o.id));c.splice(e,1)}else v.innerHTML="Remove from watched",o.watched=!0,c.push(o);n("filmoteka-watched",c),e(u?c:i)})),q.addEventListener("click",(function(){if(o.queued){o.queued=!1,q.innerHTML="Add to queue";let e=i.findIndex((e=>e.id===o.id));i.splice(e,1)}else q.innerHTML="Remove from queue",o.queued=!0,i.push(o);n("filmoteka-queue",i),e(u?c:i)}));document.querySelector(".movdiv2").addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;d=u?c:i;const t=e.target.attributes[0].value;var n=d.findIndex((e=>t-e.id==0));const r=document.querySelector(".title-film"),l=document.querySelector(".movie-poster"),s=document.querySelector(".vote"),a=document.querySelector(".votes"),m=document.querySelector(".popularity"),p=document.querySelector(".title"),L=document.querySelector(".genres"),f=document.querySelector(".description-text");o=d[n],r.innerHTML=o.title,l.src=o.poster_path,s.innerHTML=o.vote_average,a.innerHTML=" / "+o.vote_count,m.innerHTML=o.popularity,p.innerHTML=o.original_title,L.innerHTML=o.genres,f.innerHTML=o.overview,o.watched?v.innerHTML="Remove from watched":v.innerHTML="Add to watched";o.queued?q.innerHTML="Remove from queue":q.innerHTML="Add to queue";y.style.display="block"}));
//# sourceMappingURL=my_library.7da561a7.js.map