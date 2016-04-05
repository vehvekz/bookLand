/*
 * libraries
 */

//= ../libs/jquery/dist/jquery.min.js

/*
 * Custom
 */

$(document).ready(function () {

	//= parts/main.js

	$('#form').on('submit', function(e){
		e.preventDefault();
		var method=$(this).attr('method');
		var action=$(this).attr('action');
		var data=$(this).serialize();
		$.ajax({
			type: method,
			url: action,
			data: data
		}).done(function(result){
			$('#form').html(result).addClass('active');
		})
	});


});

