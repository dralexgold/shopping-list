$(document).ready(function() {
	// add list items
	$('.add-button').click(function(){
		var txtbox = document.getElementbyId('.add-items');

		if (!$.trim($('.add-items').val())){
			alert('You\'ve entered nothing in the box!');
		} else {

			$('<li></li>').appendTo('<ul>').html('<div class="checkbox"></div>' + txtval + '</span>');
			document.getElementById('item').value = '';
		};

	});



	// tick items


	// turn ticked items grey


	// clear list
});
