(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.querySelectorAll(".square"),u=document.querySelector("#statText"),m=document.querySelector("#restartBtn"),f=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let i=["","","","","","","","",""],r="X",l=!1;p();function p(){d.forEach(n=>n.addEventListener("click",y)),m.addEventListener("click",x),u.textContent=`${r}'s turn`,l=!0}function y(){let n=this.getAttribute("squareIndex");i[n]!=""||!l||(h(this,n),q())}function h(n,o){i[o]=r,n.textContent=r,n.classList.add(r)}function g(){r=r==="X"?"O":"X",u.textContent=`${r}'s turn`}function q(){let n=!1;for(let o=0;o<f.length;o++){let s=f[o],c=i[s[0]],e=i[s[1]],t=i[s[2]];if(!(c===""||e===""||t==="")&&c===e&&e===t){n=!0;break}}n?(u.textContent=`${r} Wins!`,l=!1):i.includes("")?g():(u.textContent="Cat! (Draw)",l=!1)}function x(){r="X",i=["","","","","","","","",""],u.textContent=`${r}'s turn`,d.forEach(n=>n.textContent=""),l=!0}
