(function(){
	var app = {

		init: function(){
			this.setUpListeners();
			this.popUp();
		},

		setUpListeners: function () {
			
		},

		popUp: function () {
			$('.join-sign').magnificPopup({
				type:'inline',
				midClick: true
			});
		},
		ajaxSend: function () {
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
					$('#form').html(result);
				})
			});
		}

	}

	app.init();

})();