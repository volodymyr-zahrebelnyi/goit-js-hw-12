import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",h="44794510-78ac4561676a1628ffedd5f1c";function m(i){const o=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${o}`).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const c=document.querySelector(".loader");function p(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:a,downloads:l})=>`<li class="gallery-item">
            <a class="gallery-link js-item" href="${r}" data-image-description="${s}">
                <img
                    class="gallery-image"
                    src="${o}" 
                    data-source="${r}" 
                    alt="${s}" 
                     width="360" height="200"
                    />
                    </a>
                <div class="image-info-wrap">
                    <div class="image-info">
                        <h2 class="title">
                        Likes
                        <p class="amount">${e}</p>
                        </h2>
                    </div>
                    <div class="image-info">
                        <h2 class="title">
                        Views
                        <p class="amount">${t}</p>
                        </h2>
                    </div>
                    <div class="image-info">
                        <h2 class="title">
                        Comments
                        <p class="amount">${a}</p>
                        </h2>
                    </div>
                    <div class="image-info">
                        <h2 class="title">
                        Downloads
                        <p class="amount">${l}</p>
                        </h2>
                    </div>
                </div>
        </li>`).join("")}function y(){new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){c.style.display="block"}function v(){c.style.display="none"}function n(){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}const L=document.querySelector(".js-gallery"),w=document.querySelector(".js-search-form");w.addEventListener("submit",$);function $(i){i.preventDefault();const o=i.currentTarget,r=o.elements.query.value.trim().toLowerCase();if(!r){n();return}g(),m(r).then(s=>{if(!s.hits.length){n();return}L.innerHTML=p(s.hits),y()}).catch(n).finally(()=>{v(),o.reset()})}
//# sourceMappingURL=commonHelpers.js.map
