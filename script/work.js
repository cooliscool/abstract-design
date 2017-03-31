jQuery(document).ready(function ($) {

			var max = $('a.anav').length;
			var oldColor = "#333366"; 
			var newColor = "#666699";
			$('#current').css("background-color", newColor);

			$('#checkbox').change(function(){
			    setInterval(function () {
			        moveRight();
			    }, 3000);
			  });
		  	
			var slideCount = $('#slider ul li').length;
			var slideWidth = $('#slider ul li').width();
			var slideHeight = $('#slider ul li').height();
			var sliderUlWidth = slideCount * slideWidth;
			
			$('#slider').css({ width: slideWidth, height: slideHeight });
			
			$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
			
		    $('#slider ul li:last-child').prependTo('#slider ul');

		    function moveLeft(time) {
		        $('#slider ul').animate({
		            left: + slideWidth
		        }, time, function () {
		            $('#slider ul li:last-child').prependTo('#slider ul');
		            $('#slider ul').css('left', '');
		        });
		    };

		    function moveRight(time) {
		        $('#slider ul').animate({
		            left: - slideWidth
		        }, time, function () {
		            $('#slider ul li:first-child').appendTo('#slider ul');
		            $('#slider ul').css('left', '');
		        });
		    };


		    function move(from, to){
		    	if(from == to)
		    		return
		    	if(from>to){
		    		for (var i= from - to ; i > 0; i--)
		    			moveLeft(200/i);
    				return
		    	}
		    	else{
		    		for (var i= to - from ; i > 0; i--)
		    			moveRight(200/i);
		    		return
		    	}
		    }


		    $('a.control_prev').click(function () {


		    	var now = parseInt($('#current').data("id")) ;
		    	$('#current').css("background-color", oldColor);
		    	$('#current').attr("id","");
		    	
		    	if (now == 1 ) now = max;
		    	else now = now-1;

		    	$('a[ data-id="'+ now + '"]').css("background-color", newColor);
		    	$('a[ data-id="'+ now + '"]').attr("id","current");

		        moveLeft(200);
		    });

		    $('a.control_next').click(function () {

		    	var now = parseInt($('#current').data("id")) ;
		    	$('#current').css("background-color", oldColor);
		    	$('#current').attr("id","");

		    	if (now == max ) now = 1;
		    	else now = now + 1;

		    	$('a[ data-id="'+ now + '"]').css("background-color", newColor);
		    	$('a[ data-id="'+ now + '"]').attr("id","current");
		        moveRight(200);
		    });


		     $('a.anav').click(function(){
		    	var to = $(this).data("id") ;
		    	var from = $('#current').data("id") ;

		    	if (from == to) return;
				$(this).css("background-color", newColor);
				$('#current').css("background-color", oldColor);
				$('#current').attr("id","");		
				$(this).attr("id","current");

				move(from,to);
		    	// $(this).animate({
			    //         backgroundColor: '#eeeeee'
			    //     }, 200);
		    	// $('#current').animate({
			    //         backgroundColor: '#eeeeee'
			    //     }, 200);
		    	console.log(from ,to );
		   	});
			  
		});    