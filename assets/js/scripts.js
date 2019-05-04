$(document).ready(function($) {
	console.log("ready!!!");
	$('#seeMore1').click(function(event) {
		/* Act on the event */
		$('.modal-body').html('Hola')
	});
	$('#seeMore2').click(function(event) {
		/* Act on the event */
		$('.modal-body').html('Hola 2')
	});
});