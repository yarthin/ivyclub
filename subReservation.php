
<div id="my-contact-div">
    
    <div id="contactable-inner"></div>

    <form id="contactable-contactForm" method="" action="include/create_loungereservation.php">
        
        <div id="contactable-loading"></div>
        <div id="contactable-callback"></div>
        <div class="contactable-holder"> 
            <input id="firstname" label="Vorname" placeholder="Vorname" name="firstname" aria-required="true" class="contactable-contact"  required> 
            <input id="lastname" label="Nachname" placeholder="Nachname" name="lastname" aria-required="true" class="contactable-contact"  required>
            <input id="email" placeholder="E-Mail" label="Email" name="email" aria-required="true" class="contactable-contact" required>
            <input id="telno" placeholder="Telefon" name="telno" label="Telefon" aria-required="true" class="contactable-contact"  required> 
            <input id="birthday" placeholder="Geburtsdatum" name="birthday" label="Geburtsdatum" aria-required="true" class="contactable-contact"  required> 
            <select name="subject" id="subject" class="form-control" label="Vorname" aria-invalid="true" required >
                <option value="" selected>Event wählen</option> 
                

            </select> 
            <input type = 'hidden' id = 'event_txt' label="Event"  name = 'event_txt' >
            <input type="text" aria-required="true" id="anderes_datum" label="Anderes Datum" name="anderes_datum" class="ontactable-contact" placeholder="Anderes Datum" aria-invalid="true" required> 

            <!-- input type="text" aria-required="true" id="people_num" label="Anzahl Gäste"  name="people_num" class="ontactable-contact" placeholder="Anzahl Person" aria-invalid="true" required  maxlength="15" pattern="\d*" / --> 
            <select name="people_num" id="people_num" class="form-control" label="Vorname" aria-invalid="true" required >
                <option value="" selected>Anzahl Person</option> 
                <option value="5" >Anzahl Person : 5</option> 
                <option value="10" >Anzahl Person : 10</option> 
                <option value="15" >Anzahl Person : 15</option> 
                <option value="20" >Anzahl Person : 20</option> 
                <option value="25" >Anzahl Person : 25</option> 
                <option value="30" >Anzahl Person : 30</option> 
                <option value="35" >Anzahl Person : 35</option> 
                <option value="40" >Anzahl Person : 40</option> 
                <option value="45" >Anzahl Person : 45</option> 
                <option value="50" >Anzahl Person : 50</option> 
                
            </select>
            <button class="contactable-submit" type="submit" id="submit">Jetzt Reservieren 
                <i class="zmdi zmdi-long-arrow-right"></i>
            </button>
        </div>
    </form>

</div>


<?php include_once("include/events_api.php"); ?>
<script type="text/javascript">
    
jQuery(function(){
    jQuery('#my-contact-div').contactable(
    {
        recievedMsg : 'Vielen Dank für deine Reservation, du bekommst eine Bestätigung von uns.',
        hideOnSubmit: true
    });
});

$(document).ready(function() {
    var options = '<option value="" selected>Bitte wählen</option>';
    <?php foreach($result_json["event"] as $evt) { ?>
        <?php 
        $startdate = explode(" ", $evt["startdate"])[0];
        $startdate_arr = explode("-", $startdate);
        $value = $evt["name"]." - ".$startdate_arr[2]."-".$startdate_arr[1]."-".$startdate_arr[0]; 
        ?>
        options += '<option value="<?php echo $evt["id"]; ?>"><?php echo $value; ?></option>';
        //options += '<option value="<?php echo $value; ?>"><?php echo $value; ?></option>';
    <?php } ?>
    $("select#subject").html(options);	
	$('#subject').select2({
        minimumResultsForSearch: 1
    });
    $('#people_num').select2({
        minimumResultsForSearch: 1
    });

	$("#anderes_datum").show();
	$("#subject").change(function() {
		if($(this).val() != "") {
			$("#anderes_datum").removeAttr("required");
			$("#anderes_datum").hide();

            var event_txt = $("#subject option:selected").text();
            $('#event_txt').val(event_txt);
		} else {
			$("#anderes_datum").attr("required");
			$("#anderes_datum").show();
		}
	});

});


</script>