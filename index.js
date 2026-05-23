import{a as f,S as p,i as a}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="33134481-5dd34c0597b8956a5c7f23b76",y="https://pixabay.com/api/";function h(s){return f.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" loading="lazy"/>
        </a>
        <div class="info">
          <span><b>Likes</b> ${t}</span>
          <span><b>Views</b> ${n}</span>
          <span><b>Comments</b> ${u}</span>
          <span><b>Downloads</b> ${d}</span>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("hidden")}function c(){document.querySelector(".loader").classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",s=>{s.preventDefault();const r=s.target["search-text"].value.trim();r&&(L(),S(),h(r).then(o=>{if(c(),o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{c(),a.error({message:o.message,position:"topRight"})}))});
//# sourceMappingURL=index.js.map
