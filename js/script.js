function manageSearchBtn(){
  $("#search-btn-1").click(function(){
    $(this).css("opacity", "0");
    $(".nav-bar-form").css("display", "flex");  
    setTimeout(()=>{
      $(this).css("display", "none");
      $(".nav-bar-form").css("opacity", "1");
    }, 10);
  });
  $("#nav-bar-form-close").click(function(){
    $(".nav-bar-form").css("opacity", "0");
    $("#search-btn-1").css("display", "inline-block");  
    setTimeout(()=>{
      $(".nav-bar-form").css("display", "none");
      $("#search-btn-1").css("opacity", "1");
    }, 10);
  });
}
/* =================================== */

function categHover() {
  $(".nav-ul-li").hover(function(){
    $(this).find(".drop-down").show(200).css("display", "flex");
  }, function(){
    $(this).find(".drop-down").hide(200);
  });  
}

/* =================================== */
function loopSlide(){
  document.querySelector("#radio"+slide_counter).checked = true;
  slide_counter++;
  if(slide_counter > 6) slide_counter = 1;
}
function autoImageSlider(){
  slide_counter = 2;
  let initLoop, autoLoop;
  initLoop = setInterval(()=>reLoop(initLoop), 2000);
  function reLoop(initLoop){
    loopSlide();
    clearInterval(initLoop);
    autoLoop = setInterval(loopSlide, 3000);
  }
  $(".slide-manual").click(function(){
    clearInterval(autoLoop);
    slide_counter = 1;
    initLoop = setInterval(()=>reLoop(initLoop), 15000);
  });
} 


$(function(){
  $("#slide-desc1 span").css("animation", "show-item 1s forwards ease");
  $("#slide-desc1 span").css("animation-delay", (i, c) => (i * 0.1 + 1) + "s");
  categHover();
  manageSearchBtn();
  autoImageSlider();
});
