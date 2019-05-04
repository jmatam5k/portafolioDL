$(document).ready(function($) {
	console.log("ready!!!");
	$('#seeMore1').click(function(event) {
		/* Act on the event */
		$('.modal-title').html('Titulo 1');
		$('.modal-body').html('Contenido 1');
	});
	$('#seeMore2').click(function(event) {
		/* Act on the event */
		$('.modal-title').html('Titulo 2');
		$('.modal-body').html('Contenido 2');
	});
	$('#seeMore3').click(function(event) {
		/* Act on the event */
		$('.modal-title').html('Titulo 3');
		$('.modal-body').html('Contenido 3');
	});
	$('[data-toggle="tooltip"]').tooltip()
});