	var picker = new Pikaday(
	{    
	    changeMonth: true,
	    changeYear: true,
	    field: document.getElementById('birthday'),
	    firstDay: 1,
	    format: 'DD MMMM YYYY',
	    minDate: new Date('01-01-1900'),
	    maxDate: new Date('31-12-1998'),
		maxYear: 1998,
	    yearRange: [1900,1998]
	});


	var picker = new Pikaday(
	{    
	    changeMonth: true,
	    changeYear: true,
	    field: document.getElementById('redate'),
	    firstDay: 1,
	    format: 'DD MMMM YYYY',
	    minDate: new Date('01-01-2018'),
	    maxDate: new Date('31-12-2020'),
	    yearRange: [2018,2020]		
	});


	var picker = new Pikaday(
	{    
	    changeMonth: true,
	    changeYear: true,
	    field: document.getElementById('agepicker'),
	    firstDay: 1,
	    format: 'DD MMMM YYYY',
	    minDate: new Date('01-01-1930'),
	    maxDate: new Date('31-12-1999'),
	    yearRange: [1930,1999]	
	}); 
	
	$('input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="time"], input[type="week"]').each(function() {
		var el = this, type = $(el).attr('type');
		if ($(el).val() == '') {
			$(el).attr('type', 'text');
		}
		$(el).focus(function() {
			$(el).attr('type', type);
			
			el.click();
		});
		$(el).blur(function() {
			//$("birthday").css("background-color", "#F9FEBC");
			if ($(el).val() == '') $(el).attr('type', 'text');
		});
	});
	
	$("#redate").show();
	$("#subject").change(function() {
		if($(this).val() != "") {
			$("#redate").removeAttr("required");
			$("#redate").hide();
		} else {
			$("#redate").attr("required");
			$("#redate").show();
		}
	});
	
	$(document).ready(function() {
		$('#subject').select2({
			minimumResultsForSearch: 1
		});
	});
