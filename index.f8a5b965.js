!function(){var e=document.getElementById("canvas"),t=document.getElementById("collapse"),n=e.getContext("2d"),o={x:0,y:0};function s(t){o.x=t.clientX-e.offsetLeft,o.y=t.clientY-e.offsetTop}function d(e){console.log("start"),"canvas"===e.target.id&&(s(e),document.addEventListener("mousemove",c))}function c(e){console.log("draw"),document.removeEventListener("mousedown",d),n.beginPath(),n.lineWidth=1,n.strokeStyle="#000",n.moveTo(o.x,o.y),s(e),n.lineTo(o.x,o.y),n.stroke(),document.addEventListener("mouseup",i)}function i(e){console.log("stop"),document.removeEventListener("mousemove",c),s(e),document.removeEventListener("mouseup",i),document.addEventListener("mousedown",d)}document.addEventListener("mousedown",d),t.addEventListener("click",(function(){if(!o.x&&!o.y)return;n.clearRect(0,0,e.width,e.height),e.animate(r,a)}));var r=[{transform:"rotate(0) scale(1)"},{transform:"rotate(360deg) scale(0)"}],a={duration:500,iterations:1}}();
//# sourceMappingURL=index.f8a5b965.js.map
