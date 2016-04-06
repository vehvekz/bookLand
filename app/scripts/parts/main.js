(function(){
	var app = {

		init: function(){
			this.popUp();
			this.setUpListeners();
		},

		setUpListeners: function () {
			$('#form').on('submit', app.formSubmit);
		},

		popUp: function () {
			$('.join-sign').magnificPopup({
				type:'inline',
				midClick: true
			});
		},
		formSubmit: function (e) {
				e.preventDefault();
				var data=$(this).serialize();
				$.ajax({
					type: "POST",
					url: "contact_form/contact_process.php",
					data: data
				}).done(function(msg){
					if(msg == 'OK') {
						var result = 'Your message has been sent. Thank you!';
						$('#form').html(result);
					} else {
						var result = msg;
						$('#note').html(result);
					}
				}).fail(function(){
					console.log('ajax fail!');
				})
		}

	}

	app.init();

})();