/*------------------------------------------------------------------
Jiggowaat Form

-------------------------------------------------------------------*/

jQuery(document).ready(function(){

	$('#reservationform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="https://www.ivyclub.ch/assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			fname: $('#firstname').val(),
			lname: $('#lastname').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			dateagepicker: $('#dateagepicker').val(),
			datepicker: $('#datepicker').val(),
			t_table: $('#t_able').val(),
			guest: $('#guest').val()
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
	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="https://www.ivyclub.ch/assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			subject: $('#subject').val(),
			comment: $('#comment').val(),
			
		},
			function(data){
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
	$('#newsletterform').submit(function(){

		var action = $(this).attr('action');

		$("#new_message").slideUp(750,function() {
		$('#new_message').hide();

 		$('#submit')
			.after('<img src="https://www.ivyclub.ch/assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			email: $('#nemail').val()//,
			//phone: $('#phone').val(),
		},
			function(data){
				document.getElementById('new_message').innerHTML = data;
				$('#new_message').slideDown('slow');
				$('#newsletterform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#newsletterform').slideUp('slow');

			}
		);

		});

		return false;

	});
	$('#becomememform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.after('<img src="https://www.ivyclub.ch/assets/ajax-loader.gif" class="loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			firstname: $('#firstname').val(),
			lastname: $('#lastname').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			adress: $('#adress').val(),
			zip: $('#zip').val(),
			ort: $('#ort').val(),
			datetimepicker: $('#datetimepicker').val(),
			gender: $('#gender').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#becomememform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#becomememform').slideUp('slow');

			}
		);

		});

		return false;

	});
});