

$(function() {
	$('.zipmenu').on('click', function(){
		$('.main-menu').slideToggle();
	});
});

  $(document).ready(function(){
    $('.articles').click(function(e) { 
     e.preventDefault();
 $('.articles').addClass('active');	 
		$(this).removeClass('active');
        var tab = $(this).attr('href');
  
        $(tab).slideToggle();
		
    });
});

$(document).ready(function(){
    $('.article a').click(function(e) {  
 e.preventDefault();	
		$(this).addClass('active');
		$(this).removeClass('active');
        var tab = $(this).attr('href');
        $(tab).slideToggle();
    });
});

$('.align > button').click(function() {	
	  $('.subarticle').slideUp(400);
	  $('article a > .fa').removeClass('transform');
  });
  
  $('button').mouseenter(function() {	
	  $(this).find('.fa-angle-left').css({'opacity':'1'}).css({'transform':'translateX(-20px)'});
	  $(this).find('.fa-angle-right').css({'opacity':'1'}).css({'transform':'translateX(20px)'});
  });
   $('button').mouseleave(function() {	
	  $(this).find('.fa-angle-left').css({'opacity':'0'}).css({'transform':'translateX(20px)'});
	   $(this).find('.fa-angle-right').css({'opacity':'0'}).css({'transform':'translateX(-20px)'});
  });
  
$(function() {
	$('.articles').click(function(){
		if ($(this).find('.fa').hasClass('transform')) {
			$(this).find('.fa').removeClass('transform');			
		} else {
		$(this).find('.fa').addClass('transform');	
		}
	});
});
$(function() {
	$('.article a').click(function(){
		if ($(this).find('.fa').hasClass('transform')) {
			$(this).find('.fa').removeClass('transform');			
		} else {
		$(this).find('.fa').addClass('transform');	
		}
	});
});
window.onload = function() {
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		if ($('.upbutton').is(':hidden')) {
			$('.upbutton').css({opacity : 0.8}).fadeIn('slow');
		}
	} else { $('.upbutton').stop(true, false).fadeOut('fast'); }
});
$('.upbutton').click(function() {
	$('html, body').stop().animate({scrollTop : 0}, 300);
});
}


 $(document).ready(function() {
	$("#ajaxform").submit(function(){ 
		var form = $(this); 
		var error = false; 
		form.find('input, textarea').each( function(){ 
			if ($(this).val() == '') { 
				alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); 
				error = true; 
			}
		});
		if (!error) { 
			var data = form.serialize(); 
			$.ajax({ 
			   type: 'POST', 
			   url: 'contact-form.php', 
			   dataType: 'json', 
			   data: data, 
		       beforeSend: function(data) { 
		            form.find('button').attr('disabled', 'disabled'); 
		          },
		       success: function(data){ 
		       		if (data['error']) { 
		       			alert(data['error']); 
		       		} else { 
		       			alert('Заявка oтврaвлeна!'); 
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { 
		            alert(xhr.status); 
		            alert(thrownError); 
		         },
		       complete: function(data) { 
		            form.find('button').prop('disabled', false); 
		         }
		                  
			     });
		}
		return false;
	});
});
$(document).ready(function(){
$('.owl-carousel').owlCarousel();
});