import{S as d,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="47413838-05ed4088691502c79710d9d69",p="https://pixabay.com/api/",i=document.querySelector(".gallery"),h=document.querySelector(".search-form"),c=document.querySelector(".loader-container");h.addEventListener("submit",function(o){o.preventDefault();const r=document.querySelector(".search-query").value;y(r)});function y(o){c.style.display="flex",fetch(`${p}?key=${f}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(`Network response was not ok: ${r.statusText}`);return r.json()}).then(r=>{m(r.hits)}).catch(r=>{l("An error occurred. Please try again."),console.error("Fetch error:",r)}).finally(()=>{c.style.display="none"})}function m(o){if(i.innerHTML="",o.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}o.forEach(function(n){const s=document.createElement("div");s.classList.add("image-card"),s.innerHTML=`
            <a href="${n.largeImageURL}" data-lightbox="gallery">
                <img src="${n.webformatURL}" alt="${n.tags}">
            </a>
            <div class="image-info">
                <p>Likes: ${n.likes}</p>
                <p>Views: ${n.views}</p>
                <p>Comments: ${n.comments}</p>
                <p>Downloads: ${n.downloads}</p>
            </div>
        `,i.appendChild(s)}),new d(".image-card a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function l(o){u.error({title:"Error",message:o||"An error occurred. Please try again."})}
//# sourceMappingURL=index.js.map
