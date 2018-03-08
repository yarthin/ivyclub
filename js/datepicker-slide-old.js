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
	    field: document.getElementById('anderes_datum'),
	    firstDay: 1,
	    format: 'DD MMMM YYYY',
	    minDate: new Date('01-01-1900'),
	    maxDate: new Date('31-12-1998'),
		maxYear: 1998,
	    yearRange: [1900,1998]
	});
	
	$("#submit").click(function() {
		if($("#subject").val() != "") {
			$("#anderes_datum").removeAttr("required");
		} else {
			$("#subject").removeAttr("required");
			$("#anderes_datum").attr("required");
		}
	});
	
	$("#anderes_datum").show();
	$("#subject").change(function() {
		if($(this).val() != "") {
			$("#anderes_datum").removeAttr("required");
			$("#anderes_datum").hide();
		} else {
			$("#anderes_datum").attr("required");
			$("#anderes_datum").show();
		}
	});