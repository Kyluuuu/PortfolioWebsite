import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                 */const w=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})}),b=document.querySelectorAll(".hidden");b.forEach(o=>w.observe(o));window.addEventListener("load",()=>{console.log("load!"),document.querySelector(".navBar").classList.add("showUp")});const l=document.getElementById("scrollText");window.addEventListener("wheel",o=>{o.deltaY>0&&(l.classList.add("scrollHide"),l.classList.remove("scrollAnimation"))});window.addEventListener("scroll",()=>{l.classList.add("scrollHide"),l.classList.remove("scrollAnimation")});window.history.scrollRestoration="manual";document.addEventListener("DOMContentLoaded",()=>{window.scrollTo(0,0)});const f=document.getElementById("experience");f.addEventListener("click",()=>{const e=document.getElementById("experienceSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-n,behavior:"smooth"})});const v=document.getElementById("projects");v.addEventListener("click",()=>{const e=document.getElementById("projectSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-n,behavior:"smooth"})});const E=document.getElementById("about");E.addEventListener("click",()=>{const e=document.getElementById("aboutSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-n,behavior:"smooth"})});const p=document.getElementById("contact");p.addEventListener("click",()=>{const e=document.getElementById("contactSection").getBoundingClientRect().top+window.scrollY,n=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-n,behavior:"smooth"})});const B=document.getElementById("home");B.addEventListener("click",o=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{l.classList.remove("scrollHide"),l.classList.add("scrollAnimation")},1e3)});const i=document.getElementById("lightModeButton"),y=i.querySelector(".moon"),h=i.querySelector(".sunny");let r=!0;const s=document.querySelector(".lightSwitch");i.addEventListener("click",g);function g(){r=!r;const o=document.querySelector(".beginTitle h1"),e=document.querySelector(".innerLeftAbout p"),c=document.querySelector(".beginTitle h2"),n=document.querySelector(".Technology"),d=document.querySelector(".scroll"),a=document.querySelectorAll(".hidden"),u=document.querySelectorAll(".allProjectsContainer"),m=document.querySelectorAll(".allExperienceContainer");r?(s.classList.add("on"),s.classList.remove("off"),y.style.display="none",h.style.display="block",document.body.style.backgroundColor="white",o.style.color="black",e.style.color="black",c.style.color="#555",n.style.color="#555",d.style.color="black",a.forEach(t=>{t.style.color="black",t.style.borderColor="black"}),u.forEach(t=>{t.style.color="white"}),m.forEach(t=>{t.style.color="black"})):(s.classList.add("off"),s.classList.remove("on"),h.style.display="none",y.style.display="block",document.body.style.backgroundColor="#333",o.style.color="white",e.style.color="white",c.style.color="#999",n.style.color="#999",d.style.color="white",a.forEach(t=>{t.style.color="white",t.style.borderColor="white"}),u.forEach(t=>{t.style.color="white"}),m.forEach(t=>{t.style.color="white"}))}g();
