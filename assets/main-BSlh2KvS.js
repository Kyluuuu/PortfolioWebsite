import"./mainCSS-Z_oY0_b-.js";const S=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})}),f=document.querySelectorAll(".hidden");f.forEach(o=>S.observe(o));window.addEventListener("load",()=>{document.querySelector(".navBar").classList.add("showUp")});const l=document.getElementById("scrollText");window.addEventListener("wheel",o=>{o.deltaY>0&&(l.classList.add("scrollHide"),l.classList.remove("scrollAnimation"))});let B=document.getElementById("slowScrollBox");window.addEventListener("scroll",()=>{let o=window.scrollY;B.style.transform=`translateY(${-o*.3}px)`,l.classList.add("scrollHide"),l.classList.remove("scrollAnimation")});const E=document.getElementById("projects");E.addEventListener("click",()=>{const e=document.getElementById("projectSection").getBoundingClientRect().top+window.scrollY,c=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-c,behavior:"smooth"})});const k=document.getElementById("about");k.addEventListener("click",()=>{const e=document.getElementById("aboutSection").getBoundingClientRect().top+window.scrollY,c=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-c,behavior:"smooth"})});const q=document.getElementById("contact");q.addEventListener("click",()=>{const e=document.getElementById("contactSection").getBoundingClientRect().top+window.scrollY,c=document.querySelector(".navBar").offsetHeight*1.2;window.scrollTo({top:e-c,behavior:"smooth"})});const L=document.getElementById("home");L.addEventListener("click",o=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{l.classList.remove("scrollHide"),l.classList.add("scrollAnimation")},1e3)});const s=document.getElementById("lightModeButton"),w=s.querySelector(".moon"),p=s.querySelector(".sunny");s.addEventListener("click",()=>{let o=!JSON.parse(localStorage.getItem("lightModeOn"));v(o),localStorage.setItem("lightModeOn",String(o))});v(JSON.parse(localStorage.getItem("lightModeOn")));function v(o){console.log(o);const e=document.querySelector(".beginTitle h1"),n=document.querySelector(".innerLeftAbout p"),c=document.querySelector(".beginTitle h2"),r=document.querySelector(".Technology p"),i=document.querySelector(".scroll"),a=document.querySelectorAll(".hidden"),d=document.querySelectorAll(".allProjectsContainer"),y=document.querySelectorAll(".allExperienceContainer"),u=document.querySelector(".box"),m=document.querySelector(".scrollBoxDivSunFore"),g=document.querySelector(".scrollBoxDivMoonFore"),h=document.querySelector(".scrollBoxDivGradientDark"),b=document.querySelector(".scrollBoxDivGradientLight");o?(w.style.display="none",p.style.display="block",document.body.style.backgroundColor="white",e.style.color="black",n.style.color="black",c.style.color="#666",r.style.color="#666",i.style.color="black",m.style.opacity=1,g.style.opacity=0,b.style.opacity=1,h.style.opacity=0,u.style.backgroundColor="white",a.forEach(t=>{t.style.color="black",t.style.borderColor="black"}),d.forEach(t=>{t.style.color="white"}),y.forEach(t=>{t.style.color="black"})):(p.style.display="none",w.style.display="block",document.body.style.backgroundColor="#333",e.style.color="white",n.style.color="white",c.style.color="#999",r.style.color="#999",i.style.color="white",m.style.opacity=0,g.style.opacity=1,b.style.opacity=0,h.style.opacity=1,u.style.backgroundColor="#333",a.forEach(t=>{t.style.color="white",t.style.borderColor="white"}),d.forEach(t=>{t.style.color="white"}),y.forEach(t=>{t.style.color="white"}))}
