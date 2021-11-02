$('#header_slider').carousel({
  interval: 3000
});


$('.store_slider #header_slider').carousel({
  interval: 11000
});

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("cart_table").deleteRow(i);
}



    
    var countEl = $(".item_count #count");
    function plus(){
    	var count = $(".item_count #count").val();
        count++;
        countEl.val(count) ;
    }
    function minus(){
    	var count = $(".item_count #count").val();
      if (count > 1) {

        count--;
        countEl.val(count)
      }  
    }

 new WOW().init();


$(document).ready(function(){
  $("a:not(.carousel-control-prev , .carousel-control-next ,.out_page_link)").on('click', function(event) {
      $(".nav_links ul").removeClass("show_nav_links");
   if (this.hash !== "") {
     
      event.preventDefault();

     
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});

  $(".bar_icon").on('click', function(event) {
     $(".nav_links ul").toggleClass("show_nav_links");
     

  });
