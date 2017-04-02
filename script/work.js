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

				function setHeading(num , target){
					var headings = [
						'Minimal movie poster',
						'Newspaper Advertisement',
						'SpeakU Logo',
						'Aurum Lily logo',
						'Wall Art concept'
					];

					var n = num -1;

					$(target).animate({
						'opacity' : '0'
					}, 300, function(){
						$(target).text(headings[n]);
						$(target).animate({
							'opacity' : '1.0'
						}, 300)
					});


					console.log('yoyo');
				}


		    function move(from, to){

					if ($('.dynamicheading').length){
							setHeading(to, '.dynamicheading');
					}

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

					var to;
		    	if (now == 1 ) to = max;
		    	else to = now-1;

		    	$('a[ data-id="'+ to + '"]').css("background-color", newColor);
		    	$('a[ data-id="'+ to + '"]').attr("id","current");

					console.log(now,to);
		      move(now,to);
		    });

		    $('a.control_next').click(function () {

					var now = parseInt($('#current').data("id")) ;
		    	$('#current').css("background-color", oldColor);
		    	$('#current').attr("id","");
					var to;
		    	if (now == max ) to = 1;
		    	else to = now + 1;

		    	$('a[ data-id="'+ to + '"]').css("background-color", newColor);
		    	$('a[ data-id="'+ to + '"]').attr("id","current");

					console.log(now,to);
		      move(now,to);
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
