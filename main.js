document.addEventListener( "DOMContentLoaded" , (e) => {
  const svgDocument = document.getElementById("map"); //получаем элмент object
  const mapInfo = document.querySelector(".map__info");
  const mapInfoCount = document.getElementById("map-count");

  const countInfo = {
    RU: 60,
    UA: 13,
  }


  svgDocument.addEventListener("mouseover", (e) => {
    if (e.target.id != "map") {
      e.target.setAttribute("fill", "#38ABFF");

      document.body.append(mapInfo);

      function moveAt(pageX, pageY) {
        mapInfo.style.left = pageX - mapInfo.offsetWidth + 13 + 'px';
        mapInfo.style.top = pageY  - mapInfo.offsetHeight - 8 + 'px';
      }
      
      moveAt(e.pageX, e.pageY);
      mapInfo.classList.remove("hidden");

      mapInfoCount.textContent = countInfo[e.target.id] || 0;

     
      

      function onmousemove(e) {
        if (e.target.id != "map") {        
          moveAt(e.pageX, e.pageY);      
        }    
      };

      svgDocument.addEventListener("mousemove", onmousemove);

      svgDocument.onmouseout = (e) => {
        e.target.setAttribute("fill", "#AAAAAA");
    
        if (e.target.id != "map") {
          mapInfo.classList.add("hidden");

          svgDocument.removeEventListener("mousemove", onmousemove);
          svgDocument.onmouseout = null;
        }
      };
    }
  });
  
  console.log(e.target)
});
