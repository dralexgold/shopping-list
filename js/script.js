$(document).ready(function() {

	console.log('loaded');
	// Enter to enable add
	$('.add-items').keyup(function(event){
		if(event.keyCode == 13) {
			$('.add-button').click();
		};
	});

	// add list items
	$('.add-button').click(function() {
		var txtbox = $('.add-items')[0];
		var txtval = txtbox.value;

		if (!$.trim($('.add-items').val())){
			alert('You\'ve entered nothing in the box!');
		} else {

			$('.items-list').prepend('<li class="items"><div class="checkbox"></div><span>' + txtval + '</span></li>');
			$('.add-items').val('');
		};
	});


	// tick items
	$('.items-list').on('click', 'li', function(){
		$(this).children('.checkbox').toggleClass('checkbox-x');
		$(this).children('.checkbox').toggleClass('checkbox-x-grey');
		$(this).children().toggleClass('grey-text');
	});

	// clear list
	$('.clear-button').click(function(){
		$('.items-list').empty();
	});
});


