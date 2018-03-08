jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="../images/loader.png" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				subject: $('#subject').val(),
				comments: $('#comments').val(),
				verify: $('#verify').val()
			},function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

});

jQuery(document).ready(function(){

	$('#reservationform').submit(function(){
		
		var action = $(this).attr('action');
		
		$("#message").slideUp(750,function() {
			$('#message').hide();

	 		$('#submit')
				.after('<img src="../images/loader.png" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				datepicker: $('#datepicker').val(),
				agepicker: $('#agepicker').val(),
				subject: $('#subject').val(),
			},
			
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#reservationform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#reservationform').slideUp('slow');

			}
		);

		});

		return false;

	});

});

jQuery(document).ready(function(){

	$('#reservationformdirect').submit(function(){
		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
			$('#message').hide();

	 		$('#submit')
				.after('<span class="loader" /></span>')
				.attr('disabled','disabled');

			$.post(action, {
				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				birthday: $('#birthday').val(),
				telno: $('#telno').val(),
				event_id: $('#subject').val(),
				event_txt: $('#event_txt').val(),
				people_num: $('#people_num').val(),
			},
				function(data){
					var data = JSON.parse(data); 
					document.getElementById('message').innerHTML = data.msg;
					$('#message').slideDown('slow');
					$('#reservationformdirect img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					//if(data.match('success') != null) 
						$('#reservationformdirect').slideUp('slow');

				}
		);

		});

		return false;

	});

	$("#submit").click(function() {
		if($("#subject").val() != "") {
			$("#redate").removeAttr("required");
		} else {
			$("#subject").removeAttr("required");
			$("#redate").attr("required");
		}
	});
});