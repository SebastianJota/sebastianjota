(function ($) {
"use strict";

/*--------------------------------------
	Magnific popup Active
----------------------------------------*/
$('.img-thumbnail').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled:true
	}
});


$('.video-popup').magnificPopup({
	type: 'iframe'
});

})(jQuery);	


