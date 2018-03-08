/*
 * contactable 1.5 - jQuery Ajax contact form
 *
 * Copyright (c) 2009 Philip Beel (http://www.theodin.co.uk/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Revision: $Id: jquery.contactable.min.js 2012-05-26 $
 *
 */

(function(jQuery){

	// Define the new for the plugin ans how to call it
	jQuery.fn.contactable = function(options) {
		// Set default options
		var defaults = {
			url: '../include/create_loungereservation.php',
			eventdata: '../include/events_api.php',
			header: '',
			firstname: 'Vorname',
			lastname: 'Nachname',
			email: 'E-Mail',
			telno: 'Telefon',
			birthday: 'birthday',
			redate: 'anderes_datum',
			dropdownTitle: '',
			dropdownOptions: ['General', 'Website bug', 'Feature request'],
			subject : 'Reservationsanfrage',
			submit : 'SEND',
			recievedMsg : '<h1>Reservation erhalten.</h1><p>\nVielen Dank {$firstname} {$lastname} wir haben deine Reservation erhalten.\n</p>',
			notRecievedMsg : '<p>Fehler! Bitte wende dich an <a href="mailto:info@ivyclub.ch">info@ivyclub.ch</a></p>',
			footer: 'Please feel free to get in touch, we value your feedback',
			hideOnSubmit: true
		};

		var options = jQuery.extend(defaults, options);

		return this.each(function() {

			// Create the form and inject it into the DOM
			var dropdown = ''
			,	filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
			,	dropdownLen = options.dropdownOptions.length
			,	i;

			// Add select option if applicable
			if(options.dropdownTitle) {
				dropdown += '<p><label for="contactable-dropdown">'+options.dropdownTitle+' </label><br /><select name="dropdown" id="contactable-dropdown" class="contactable-dropdown">';

				for(i=0; i < dropdownLen; i++) {
					dropdown += '<option value="'+options.dropdownOptions[i]+'">'+options.dropdownOptions[i]+'</option>';
				}

				dropdown += '</select></p>';
			}
			

			//jQuery(this).html('<div id="contactable-inner"></div><form id="contactable-contactForm" method="" action="include/create_loungereservation.php"><div id="contactable-loading"></div><div id="contactable-callback"></div><div class="contactable-holder"> <input id="'+options.firstname+'" placeholder="'+options.firstname+'" name="'+options.firstname+'" aria-required="true" class="contactable-contact" name="'+options.firstname+'" required> <input id="'+options.lastname+'" placeholder="'+options.lastname+'" name="'+options.lastname+'" aria-required="true" class="contactable-contact" name="'+options.lastname+'" required><input id="'+options.email+'" placeholder="'+options.email+'" name="'+options.email+'" aria-required="true" class="contactable-contact" name="'+options.email+'" required> <input id="'+options.telno+'" placeholder="'+options.telno+'" name="'+options.telno+'" aria-required="true" class="contactable-contact" name="'+options.telno+'" required> <input id="'+options.birthday+'" placeholder="Geburtsdatum" name="'+options.birthday+'" aria-required="true" class="contactable-contact" name="'+options.birthday+'" required> <select name="subject" id="subject" class="form-control" aria-invalid="true" required ><option value="" selected>Bitte wählen</option> <?php include_once("'+options.eventdata+'"); ?> <?php foreach($result_json["event"] as $evt) { ?> <?php $value = $evt["name"]." - ".$evt["startdate"]; ?><option value="<?php echo $value; ?>"><?php echo $value; ?></option> <?php } ?> </select> <input type="text" aria-required="true" id="'+options.redate+'" name="'+options.redate+'" class="ontactable-contact" placeholder="Anderes Datum" aria-invalid="true" required> <button class="contactable-submit" type="submit" id="submit">Jetzt Reservieren <i class="zmdi zmdi-long-arrow-right"></i></button></div></form>');

			// hide header or footer when empty
			if(options.header.length === 0) {
				jQuery(this).find(".contactable-header").hide();
			}
			if(options.footer.length === 0) {
				jQuery(this).find(".contactable-footer").hide();
			}

			// Toggle the form visibility
			jQuery.fn.toggleClick = function() {
				var functions = arguments, iteration = 0
				return this.click(function() {
					functions[iteration].apply(this, arguments)
					iteration = (iteration + 1) % functions.length
				})
			}

			jQuery('#contactable-inner').toggleClick(function() {
				//alert('open');
				jQuery('#contactable-callback').css({display: 'none'});
				jQuery('#contactable-callback').empty();
				jQuery('.contactable-holder').css({display: 'block'});
				jQuery('.contactable-holder').children().each(function(){
					jQuery(this).val('');
					if(jQuery(this).attr('id') != 'event_txt'){
						jQuery(this).css('display', 'block');
					}
				});

				jQuery('#contactable-overlay').css({display: 'block'});
				jQuery(this).animate({"marginLeft": "-=5px"}, "2000");
				jQuery('#contactable-contactForm').animate({"marginLeft": "-=0px"}, "2000");
				jQuery(this).animate({"marginLeft": "+=285px"}, "4000");
				jQuery('#contactable-contactForm').animate({"marginLeft": "+=390px"}, "4000");
			},
			function() {
				//alert('close');
				jQuery('#contactable-contactForm').animate({"marginLeft": "-=390px"}, "4000");
				jQuery(this).animate({"marginLeft": "-=285px"}, "4000").animate({"marginLeft": "+=5px"}, "2000");
				jQuery('#contactable-overlay').css({display: 'none'});
			});

			// Submit the form
			jQuery("#contactable-contactForm").submit(function() {
				console.log("case 01");
				// Validate the entries
				var valid = true
				,	params;

				//Remove any previous errors
				jQuery("#contactable-contactForm .contactable-validate").each(function() {
					jQuery(this).removeClass('contactable-invalid'); 
				});

				// Loop through required field
				jQuery("#contactable-contactForm .contactable-validate").each(function() {

					// Check the min length
					if(jQuery(this).val().length < 2) {
						jQuery(this).addClass("contactable-invalid");
						valid = false;
					}

					//Check email is valid
					if (!filter.test(jQuery("#contactable-contactForm #contactable-email").val())) {
						jQuery("#contactable-contactForm #contactable-email").addClass("contactable-invalid");
						valid = false;
					}
				});

				if(valid === true) {
					console.log("case 03");
					submitForm();
				}
				/* submitForm(); */
				console.log("case 02");
				return false;
			});

			function submitForm() {
				// Display loading animation
				jQuery('.contactable-holder').hide();
				jQuery('#contactable-loading').show();

				// Trigger form submission if form is valid
				jQuery.ajax({
					type: 'POST',
					url: options.url,
					data: {
					/*	subject:options.subject,
						firstname:jQuery('#firstname').val(),
						lastname:jQuery('#lastname').val(),
						email:jQuery('#email').val(),
						phone:jQuery('#telno').val(),
						datepicker:jQuery('#birthday').val(),
						issue:jQuery('#contactable-dropdown').val(),*/

					//	subject:options.subject,
						firstname:jQuery('#firstname').val(),
						lastname:jQuery('#lastname').val(),
						email:jQuery('#email').val(),
						telno:jQuery('#telno').val(),
						birthday:jQuery('#birthday').val(),
						event_id:jQuery('#event_id').val(),
						event_txt:jQuery('#event_txt').val(),
						people_num : jQuery('#people_num').val(),
					},
					success: function(data) {
						// Hide loading animation
						jQuery('#contactable-loading').css({display:'none'});

						var data = JSON.parse(data);

						// Check for a valid server side response
						if( data.response === 'success') {
							jQuery('#contactable-callback').show().append(options.recievedMsg);
							if(options.hideOnSubmit === true) {
								//hide the tab after successful submition if requested
								//jQuery('#contactable-inner').click();
								setTimeout(function(){
									jQuery('#contactable-inner').click();
								}, 3500);
							}
						} else {
							jQuery('#contactable-callback').show().append(options.notRecievedMsg);
							setTimeout(function(){
								jQuery('.contactable-holder').show();
								jQuery('#contactable-callback').hide().html('');
							}, 5000);
						}
					},
					error:function(e){
						jQuery('#contactable-loading').css({display:'none'});
						jQuery('#contactable-callback').show().append(options.notRecievedMsg);
					}
				});
			}
		});
	};

})(jQuery);
