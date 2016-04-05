(function(){
	var app = {

		init: function(){
			this.setUpListeners();
		},

		setUpListeners: function () {
			$('.join-sign').on('click', this.popUp);
		},

		popUp: function (e) {
			e.preventDefault();
			
		}

	}

	app.init();

})();