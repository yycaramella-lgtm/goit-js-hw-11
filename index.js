import{a as d,S as f,i as a}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="33134481-5dd34c0597b8956a5c7f23b76",m="https://pixabay.com/api/";function y(s){return d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:l,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <span><b>Likes</b> ${t}</span>
          <span><b>Views</b> ${n}</span>
          <span><b>Comments</b> ${l}</span>
          <span><b>Downloads</b> ${u}</span>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",s=>{s.preventDefault();const r=s.target["search-text"].value.trim();r&&(b(),L(),y(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(o=>{a.error({message:o.message,position:"topRight"})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
