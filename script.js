// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 20) {
// 	    $(".navbar").addClass("sticky");
// 	  }

// 	  else{
// 		  $(".navbar").css("background" , "transparent");  	
// 	  }
//   })
// })



$(function() {
    var header = $(".navbar");
    var scroller = $(".scroll-up-btn");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if (this.scroll > 500) {
        	scroller.addClass("show");
        }
        else
        {
        	scroller.removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){

        $('html').animate({scrollTop:0})




    })
    var typed = new Typed(".typing",{
    	strings:["Designer","Developer","Blogger","Freelancer"],
    	typeSpeed:100,
    	backSpeed:60,
    	loop:true
    });
     var typed = new Typed(".typing-2",{
    	strings:["Designer","Developer","Blogger","Freelancer"],
    	typeSpeed:100,
    	backSpeed:60,
    	loop:true
    })
    $('.menu-btn').click(function(){
    	$('.navbar .menu').toggleClass("active");
    	$('.menu-btn i').toggleClass("active");
    })
    $(".carousel").owlCarousel({
    	margin: 20,
    	loop: true,
    	autoplayTimeOut: 2000,
    	autoplayHoverPause:true,
    	resposive: {
    		0:{
    			items:1,
    			nav:false
    		},
    		600:{
    			items:2,
    			nav:false
    		},
    		1000:{
    			items:3,
    			nav:false
    		}


























    	}
    })
  
});