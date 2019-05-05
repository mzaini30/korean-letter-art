$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

$('.navbar-brand').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 800)
})

$('.teks').on('keyup', function(){
	$('.hasil').html($('.teks').val())
})