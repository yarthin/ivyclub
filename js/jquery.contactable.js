(function(jQuery) {
    jQuery.fn.contactable = function(options) {
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
            subject: 'Reservationsanfrage',
            submit: 'SEND',
            recievedMsg: '<h1>Reservation erhalten.</h1><p>\nVielen Dank {$firstname} {$lastname} wir haben deine Reservation erhalten.\n</p>',
            notRecievedMsg: '<p>Fehler! Bitte wende dich an <a href="mailto:info@ivyclub.ch">info@ivyclub.ch</a></p>',
            footer: 'Please feel free to get in touch, we value your feedback',
            hideOnSubmit: !0
        };
        var options = jQuery.extend(defaults, options);
        return this.each(function() {
            var dropdown = '',
                filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                dropdownLen = options.dropdownOptions.length,
                i;
            if (options.dropdownTitle) {
                dropdown += '<p><label for="contactable-dropdown">' + options.dropdownTitle + ' </label><br /><select name="dropdown" id="contactable-dropdown" class="contactable-dropdown">';
                for (i = 0; i < dropdownLen; i++) {
                    dropdown += '<option value="' + options.dropdownOptions[i] + '">' + options.dropdownOptions[i] + '</option>'
                }
                dropdown += '</select></p>'
            }
            if (options.header.length === 0) {
                jQuery(this).find(".contactable-header").hide()
            }
            if (options.footer.length === 0) {
                jQuery(this).find(".contactable-footer").hide()
            }
            jQuery.fn.toggleClick = function() {
                var functions = arguments,
                    iteration = 0
                return this.click(function() {
                    functions[iteration].apply(this, arguments)
                    iteration = (iteration + 1) % functions.length
                })
            }
            jQuery('#contactable-inner').toggleClick(function() {
                jQuery('#contactable-callback').css({
                    display: 'none'
                });
                jQuery('#contactable-callback').empty();
                jQuery('.contactable-holder').css({
                    display: 'block'
                });
                jQuery('.contactable-holder').children().each(function() {
                    jQuery(this).val('');
                    if (jQuery(this).attr('id') != 'event_txt') {
                        jQuery(this).css('display', 'block')
                    }
                });
                jQuery('#contactable-overlay').css({
                    display: 'block'
                });
                jQuery(this).animate({
                    "marginLeft": "-=5px"
                }, "2000");
                jQuery('#contactable-contactForm').animate({
                    "marginLeft": "-=0px"
                }, "2000");
                jQuery(this).animate({
                    "marginLeft": "+=285px"
                }, "4000");
                jQuery('#contactable-contactForm').animate({
                    "marginLeft": "+=390px"
                }, "4000")
            }, function() {
                jQuery('#contactable-contactForm').animate({
                    "marginLeft": "-=390px"
                }, "4000");
                jQuery(this).animate({
                    "marginLeft": "-=285px"
                }, "4000").animate({
                    "marginLeft": "+=5px"
                }, "2000");
                jQuery('#contactable-overlay').css({
                    display: 'none'
                })
            });
            jQuery("#contactable-contactForm").submit(function() {
                console.log("case 01");
                var valid = !0,
                    params;
                jQuery("#contactable-contactForm .contactable-validate").each(function() {
                    jQuery(this).removeClass('contactable-invalid')
                });
                jQuery("#contactable-contactForm .contactable-validate").each(function() {
                    if (jQuery(this).val().length < 2) {
                        jQuery(this).addClass("contactable-invalid");
                        valid = !1
                    }
                    if (!filter.test(jQuery("#contactable-contactForm #contactable-email").val())) {
                        jQuery("#contactable-contactForm #contactable-email").addClass("contactable-invalid");
                        valid = !1
                    }
                });
                if (valid === !0) {
                    console.log("case 03");
                    submitForm()
                }
                console.log("case 02");
                return !1
            });

            function submitForm() {
                jQuery('.contactable-holder').hide();
                jQuery('#contactable-loading').show();
                jQuery.ajax({
                    type: 'POST',
                    url: options.url,
                    data: {
                        firstname: jQuery('#firstname').val(),
                        lastname: jQuery('#lastname').val(),
                        email: jQuery('#email').val(),
                        telno: jQuery('#telno').val(),
                        birthday: jQuery('#birthday').val(),
                        event_id: jQuery('#subject').val(),
                        event_txt: jQuery('#event_txt').val(),
                        people_num: jQuery('#people_num').val(),
                    },
                    success: function(data) {
                        jQuery('#contactable-loading').css({
                            display: 'none'
                        });
                        var data = JSON.parse(data);
                        if (data.response === 'success') {
                            //jQuery('#contactable-callback').show().append(options.recievedMsg);
                            jQuery('#contactable-callback').show().append(data.msg);
                            if (options.hideOnSubmit === !0) {
                                setTimeout(function() {
                                    jQuery('#contactable-inner').click()
                                }, 5500)
                            }
                        } else {
                            jQuery('#contactable-callback').show().append(options.notRecievedMsg);
                            setTimeout(function() {
                                jQuery('.contactable-holder').show();
                                jQuery('#contactable-callback').hide().html('')
                            }, 5000)
                        }
                    },
                    error: function(e) {
                        jQuery('#contactable-loading').css({
                            display: 'none'
                        });
                        jQuery('#contactable-callback').show().append(options.notRecievedMsg)
                    }
                })
            }
        })
    }
})(jQuery)