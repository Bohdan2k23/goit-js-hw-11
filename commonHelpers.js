import{i as f,S as m}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/";async function p(o){const t=new URLSearchParams({key:"42543975-3eca36a47ffade116cf6655c4",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await(await fetch(d+"?"+t.toString())).json()).hits}function y({title:o,value:t}){return`<li class="flex-col flex-center">
            <span class="bold">${o}</span>
            <span>${t}</span>
        </li>`}function h({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:e,comments:r,downloads:a}){return`
    <a href="${t}"  class="b-1 bc-gray over-hidden r-10">
        <img alt="${s}" src="${o}" class="h-200 w-full" alt="" />
        <ul class="flex-space p-4+20 fs-12" >
            ${[{title:"Likes",value:n},{title:"Views",value:e},{title:"Comments",value:r},{title:"Downloads",value:a}].map(u=>y(u)).join(`
`)}
        </ul>
    </a>`}function g(o,t){let s="";t.innerHTML="";for(const n of o)s+=h(n);t.insertAdjacentHTML("beforeend",s)}const i=document.querySelector("form"),l=document.querySelector("main"),c=document.querySelector("#loader");i.addEventListener("submit",async o=>{o.preventDefault();const t=i.elements.image;if(!t.value.trim())return;c.style.display="";const s=await p(t.value);if(c.style.display="none",t.value="",s.length==0)return l.innerHTML="",f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(s,l),new m("main a",{captionsData:"alt",captionDelay:250}).refresh()});
//# sourceMappingURL=commonHelpers.js.map
